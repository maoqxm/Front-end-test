function escapeHTML(str){
    return str.replace(/[<>"&]/g,function(tag){
        switch(tag){
            case '<' : return '&lt;'
            case '>' : return '&gt;'
            case '\"' : return '&quot;'
            case '&' : return '&amp;'
        }
    });
}
