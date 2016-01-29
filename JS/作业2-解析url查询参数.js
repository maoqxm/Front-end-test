function parseQuery(query){
    var arr = query.split('&'), obj={};
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i] == "") continue;
        obj[arr[i].split('=')[0]] = arr[i].split('=')[1]?arr[i].split('=')[1]:"";
    }
    return obj;
};

