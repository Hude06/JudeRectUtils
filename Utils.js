function log(a) {
	console.log(a)
}
function stokeRect(ctx,x,y,w,h,color) {
	ctx.strokeStyle = color;
	ctx.stokeRect(x,y,w,h);
}

function fillRect(ctx,x,y,w,h,color) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}

export class Point {
	constructor(val) {
		this.x = val
		this.y = val
	}
}

export class Rect {
	constructor(x,y,w,h) {
		this.w = w
		this.h = h
		this.x = x
		this.y = y
	}
	intersects(rect2) {
		let TL = new Point(this.x,this.y);
		let TR = new Point(this.x + this.w, this.y);
		let BL = new Point(this.x,this.y + this.h);
		let BR = new Point(this.x + this.w, this.y + this.h);
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
export function test_rects() {
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

	let rect2 = new Rect(30,30,20,20)
	console.assert(rect.intersects(rect2)==true)
	console.assert(rect2.intersects(rect)==true)
	console.log("TESTS PASS")
}
//
// let ball = new Rect()
// let planet = new Rect()
//
// function tick() {
// 	ball.x += 1
// 	if(ball.intersects(planet)) {
// 		console.log('crashed')
// 	}
// }

// function strokeRect(ctx, rect, color) {
// 	const sc = 3
// 	ctx.strokeStyle = color
// 	ctx.strokeRect(rect.x*sc,rect.y*sc,rect.w*sc,rect.h*sc);
// }
// let rect1 = new Rect(70,20,20,20)
// let rect2 = new Rect(80,30,20,20)
// strokeRect(ctx,rect1,'red')
// strokeRect(ctx,rect2, 'green')


// console.log(rect1,rect2, rect1.intersects(rect2))
// if (rect1.intersects(rect2)) {
// 	console.log("INTERSECTED")
// }
test_rects();






