function fadeout(element){
    var val = 100;
    var timer = setInterval(function(){
        if (val >= 0){
            element.style.opacity = val / 100;
            val--;
        }else{
            clearInterval(timer);
            element.style.display = 'none';
        }
    },10)
}
