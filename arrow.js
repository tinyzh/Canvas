function Arrow(){
	this.x = 0;
	this.y = 0;
	this.rotation = 0;
	this.color = '#ffff00'
}

Arrow.prototype.draw = function(context){
	context.save();
	context.translate(this.x, this.y); // 移动坐标
	context.rotate(this.rotation);  // 弧度 角度转弧度：30度 =》 30 * math.PI / 180 (弧度)
	context.lineWidth = 5;
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-50,-25);
	context.lineTo(0,-25);
	context.lineTo(0,-50);
	context.lineTo(50,0);
	context.lineTo(0,50);
	context.lineTo(0,25);
	context.lineTo(-50,25);
	context.closePath();
	context.stroke();
	context.fill();
	context.restore();
}