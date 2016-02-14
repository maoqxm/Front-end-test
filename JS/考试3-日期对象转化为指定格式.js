​function formatDate(date,pattern){
    return pattern.replace("yyyy",date.getFullYear()).replace("MM",(date.getMonth()+1)>10?date.getMonth()+1:'0'+(1+date.getMonth())).replace("dd",date.getDate()>10?date.getDate():'0'+date.getDate()).replace("HH",date.getHours()>10?date.getHours():'0'+date.getHours()).replace("mm",date.getMinutes()>10?date.getMinutes():'0'+date.getMinutes()).replace("ss",date.getSeconds()>10?date.getSeconds():'0'+date.getSeconds());
} //利用replace来替换字符串，需要注意的是如果数值小于10，则需要人为在前面添加一个'0'，特别注意月份需要+1
