function getCookies(){
    var result = {};
    var cookie = document.cookie;
    if (cookie == '') return result;
    var list = cookie.split(';');
    for (var i=0; i<list.length; i++){
        var item = list[i];
        var p = item.indexOf('=');
        var name = item.substring(0,p);
        name = decodeURLComponent(name);
        var value = item.substring(p+1);
        result[name] = value;
    }
    return result;
}
