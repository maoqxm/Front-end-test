// Ajax请求GET方法的封装
// 方法
// get(url, options, callback)
// 参数
// url    {String}    请求资源的url
// options    {Object}    请求的查询参数
// callback    {Function}    请求的回调函数，接收XMLHttpRequest对象的responseText属性作为参数
// 返回
// void
// 举例
// get(‘/information’, {name: ‘netease’, age: 18}, function (data) {
//     console.log(data);
// });
// 描述
// 方法get(url, options, callback) 是对Ajax请求GET方法的封装。请写出get方法的实现代码。

function get(url,option,callback){

    //1.创建对象
    var xmlhttp = null;
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
        //IE6以下的兼容
        xmlhttp = new ActiveXObjet("Microsoft.XMLHTTP");
    }
    //2.准备工作
    url += '?' + serialize(options);
    xmlhttp.open('get',url,true);
    //3.发送请求
    xmlhttp.send(null);
    //4.请求返回
    xmlhttp.onreadystatechange = function (callback){
        if (xmlhttp.readyState == 4){
            if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304){
                callback(xmlhttp.responseText);
            }else {
                throw new Error("request is bad");
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
