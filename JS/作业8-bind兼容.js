if{!Function.prototype.bind}{
    Function.prototype.bind = function(obj){
        var tmp = this, args = arguments;
        return function(){
                tmp.apply(obj,Array.prototype.slice.call(args,1));
        }
    }
}
