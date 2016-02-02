function Circle(r){
    this.r = r;
}

Circle.prototype.getPerimeter = function(){
    return 2*Math.PI*this.r;
}

Circle.prototype.getArea = function(){
    return Math.PI*this.r*this.r;
}

var c1 = new Circle(10);
c1.getPerimeter();
c1.getArea();
