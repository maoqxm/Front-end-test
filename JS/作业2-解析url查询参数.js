function parseQuery(query){
    var arr = query.split('&'), obj={};
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i] == "") continue;
        obj[arr[i].split('=')[0]] = arr[i].split('=')[1]?arr[i].split('=')[1]:"";
    }
    return obj;
};

//正则匹配
var parseQuery = function(query){
    var reg = /([^=&\s]+)[=\s]*([^=&\s]*)/g;
    var obj = {};
    while(reg.exec(query)){
        obj[RegExp.$1] = RegExp.$2;
    }
    return obj;
}
var jerry = parseQuery("name=jerry&age=1");
var tom = parseQuery("name= tom &age=12&gender&");

//JSON
function parseQuery(query){
    var a=query.split("&");
    var leng=a.length;
    if(!a[a.length-1]){
        leng--;
    }
    var b=[];
    for(var i=0;i<leng;i++){
        b[i]=s1(a[i]);
    }
    return JSON.parse("{"+b.toString()+"}");
}
function s1(str){
    return str.replace(/([^=]+)=?(.*)/, '"\$1"\:\"$2\"');
}
