function type(object){
    var str = Object.prototype.toString.call(object).slice(8,-1);
    return str.toLowerCase();
}
