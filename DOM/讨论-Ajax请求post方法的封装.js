// Ajax请求POST方法的封装
// post函数是对Ajax的POST请求的封装，语法如下：
//     post(url, options, callback)
// 没有返回值，参数说明如下：
//     url：请求资源的url，String类型
//     options：请求的查询参数，Object类型
//     callback：回调函数，接收XMLHttpRequest对象的responseText属性作为参数，Function类型
// 使用示例如下：
//     post('/addUser', {name: 'jerry', age: 1}, function(data) {
//         // 处理返回数据
//     });
// 请写出post函数的实现代码，要求浏览器兼容。

function post(url,options,callback){
    //1.创建对象
    var xhr = null;
    if (window.XMLHttpRequset){
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    //2.开启请求
    xhr.open('post',url,true);
    //3.申请头部字段
    xhr.setRequestHeader('Content-Type','text/plain');
    //4.发送请求
    xhr.send(serialize(options));
    //5.请求返回
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                callback(xhr.responseText);
            }
        }
    }

    //序列化对象
    function serialize(data){
        if (!data) return '';
        var pairs = [];
        for (var name in data){
            //name不是data自有属性 则跳过本次循环
            if (!data.hasOwnProperty(name)) continue;
            //name是函数则跳过本次循环
            if (typeof data[name] === 'function') continue;
            var value = data[name].toString();
            //对属性名和属性值进行编码
            name = encodeURIComponent(name);
            value = encodeURIComponent(value);
            pairs.push(name + '=' + value);
        }
        return pairs.join('&');
    }
}
