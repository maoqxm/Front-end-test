function Parent(parent){
    this.parent = parent;
}

Parent.prototype.api_parent = function(){
    console.log("api_parent");
}

function Child(property1,property2){
    this.property1 = property1;
    Parent.call(this,property2);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

Child.prototype.api_child = function(){
    console.log("api_child");
}

var obj = new Child("child","parent");
console.log(obj.property1);
obj.api_child();
console.log(obj.parent);
obj.api_parent();
