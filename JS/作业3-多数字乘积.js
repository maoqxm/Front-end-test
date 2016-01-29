function multiply(){
    var len = arguments.length, result = 1;
    for(var i=0;i<len;i++){
        result = result*arguments[i];
    }
    return result;
};
