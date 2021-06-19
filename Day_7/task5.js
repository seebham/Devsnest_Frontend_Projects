function cylinder(radius, height){
    this.radius = radius;
    this.height = height;
}
cylinder.prototype.volume = function volume(){
    return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
}
var c1  = new cylinder(14, 10);
console.log("Volume of the cylinder is: ", c1.volume());