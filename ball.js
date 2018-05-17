function Ball(){
    this.x = 0;
    this.y = 0;
    this.radius = 10; // 半径
    this.fillStyle = '#abcdef'
}

Ball.prototype.draw = function(context){
    context.save();
    context.beginPath();
    context.fillStyle = this.fillStyle;
    context.strokeStyle = 'transparent';
    context.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
    context.stroke();
    context.fill();
    context.restore();
}