function myType(param){
    var str = Object.prototype.toString.call(param).slice(8,-1); //读取识别出的类型
    str = (str!="Array")&&(str!="Date")?str.toLowerCase():str; //进行大小写转换
    return str;
}
