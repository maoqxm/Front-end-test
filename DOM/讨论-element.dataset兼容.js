if (typeof HTMLElement !== "undefined" && !Object.getOwnPropertyDescriptor(HTMLElement.prototype,"dataset")){
    //在HTMLElement.prototype上定义访问器属性dataset
    Object.defineProperty(HTMLElement.prototype,"dataset",{
        get:function(){
            //获取元素所有属性
            var attrs = this.attributes;
            var result = {};
            for (var i=0;i<attrs.length;i++){
                var attriName = attrs[i].nodeName;
                //判断属性名是否以"data-"开头
                if (/^data-/.test(attriName)){
                    //先去掉属性名开头的"data-"，然后若属性名有"-"则改写为驼峰写法
                    attriName = attriName.slice(5).replace(/-./g,function(m0){
                        return m0.slice(1).toUpperCase();
                    });
                    result[attriName] = attrs[i].value;
                }
            }
            return result;
        }
    });
}
