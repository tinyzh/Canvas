window.utils = {};

// 捕获坐标
window.utils.captureMouse = function(element){
	let mouse = {x:0, y:0};

	element.addEventListener('mousemove',function(e){
		let x,y;

		if(e.pageX || e.pageY){
			x = e.pageX;
			y = e.pageY;
		}else{
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = e.clienty + document.body.scrollTop + document.documentElement.scrollTop;
		}

		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;

	},false);

	return mouse;
}

window.utils.captureTouch = function(element){
	let touch = {
		x: null,
		y: null,
		isPressed: false,
		e: null
	};
	let body_scrollLeft = document.body.scrollLeft,
		element_scrollLeft = document.documentElement.scrollLeft,
		body_scrollTop = document.body.scrollTop,
		element_scrollTop = document.documentElement.scrollTop,
		offsetLeft = element.offsetLeft,
		offsetTop = element.offsetTop;

	element.addEventListener('touchstart',function(e){
		touch.isPressed = true;
		touch.e = e;
	},false);
	element.addEventListener('touchend',function(e){
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
		touch.e = e;
	},false);
	element.addEventListener('touchmove',function(e){
		let x,y,
			touch_event = e.touches[0];

		if(touch_event.pageX || touch_event.pageY){
			x = touch_event.pageX;
			y = touch_event.pageY;
		}else{
			x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
			y = touch_event.clientY + body_scrollTop + element_scrollTop;
		}
		x -= offsetLeft;
		y -= offsetTop;

		touch.x = x;
		touch.y = y;
		touch.e = e;
	},false);

	return touch;


}