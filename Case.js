// Setup canvas and refrence ctx
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

class Point {
	constructor(val) {
		this.x = val
		this.y = val
	} 
}
class Rect {
	constructor(x,y,w,h) {	
		this.w = w
		this.h = h
		this.x = x
		this.y = y		
	}
	intersects(rect2) {
		let TL = new Point(rect1.x,rect1.y);
		let TR = new Point(rect1.x + rect1.w,rect1.y);
		let BL = new Point(rect1.x,rect1.y + rect1.h);
		let BR = new Point(rect1.x + rect1.w,rect1.y + rect1.h);
		if (rect2.contains(TL)) {
				return true
			} else if(rect2.contains(TR)) {
				return true
			} else if(rect2.contains(BL)) {
				return true
			} else if (rect2.contains(BR)) {
				return true
			} else {
				return false
			}
		}
	contains(pt) {
		//No Size
		if (pt.x == this.x || pt.y == this.y || this.x == pt.x || pt.y == this.y)
            return false;
		//Right
		if (pt.x > this.x + this.w)
			return false;
		//Top
		if (pt.y < this.y)
			return false;
		//Botom
		if (pt.y > this.y + this.h)
			return false;
		//Left
		if (pt.x < this.x - this.w)
			return false;
		return true;
	}
}
function test_rects() {
	let rect = new Rect(25,25,20,20)
	console.assert(rect.contains(new Point(0,0))==false)
	//Top
	console.assert(rect.contains(new Point(10,0))==false)
	//Inside
	console.assert(rect.contains(new Point(30,30))==true)
	//Right
	console.assert(rect.contains(new Point(50,10))==false)
	//Left
	console.assert(rect.contains(new Point(5,10))==false)
	//Botom
	console.assert(rect.contains(new Point(25,60))==false)
}

let rect1 = new Rect(20,20,20,20)
ctx.strokeRect(20,20,20,20);
let rect2 = new Rect(80,30,20,20)
ctx.strokeRect(80,30,20,20);

if (rect1.intersects(rect2) || rect2.intersects(rect1)) {
	console.log("INTERSECTED")
}
test_rects();






