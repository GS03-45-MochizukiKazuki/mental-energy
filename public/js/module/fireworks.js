'use strict';

(function(){


var FPS = 30;
var SCREEN_WIDTH;
// var SCREEN_HEIGHT = window.innerHeight;
var SCREEN_HEIGHT = 500;
var GRAVITY = .1;

var ctx;
var particleList = [];
var mx = null;
var my = null;

var canvas = document.getElementById("fireworks");

var Particle = function(x, y){
	this.x = x;
	this.y = y;
};

window.onload = function(){
	init();
};

$(window).on('resize', function(){
	setSize();
});


var init = function(){
	
	if(!canvas){ return false; }

	setSize();

	canvas.addEventListener("mousemove", updateMousePos, false);
	canvas.addEventListener("mouseout", resetMousePos, false);
	
	loop();
};

function setSize() {
	SCREEN_WIDTH = window.innerWidth;

	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;
	ctx = canvas.getContext("2d");
}


var updateMousePos = function(e){
	var rect = e.target.getBoundingClientRect();
	console.log(mx);
	mx = e.clientX - rect.left;
	my = e.clientY - rect.top;
};

var resetMousePos = function(e){
	mx = null;
	my = null;
};

var loop = function(){
	add();
	update();
	draw();
	setTimeout(loop, 1000 / FPS);
};

var add = function(){
	if (mx !== null && my !== null) {
		var p = new Particle(mx, my);
		p.create();
		particleList.push(p);
	}
};

var update = function(){
	var list =[];
	for (var i = 0; i < particleList.length; i++) {
		particleList[i].update();

		if (!particleList[i].isRemove) {
			list.push(particleList[i]);
		}
	}
	particleList = list;
};

var draw = function(){
	ctx.fillStyle = "rgba(0,0,0)";
	ctx.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);

	// パーティクルを描画
	ctx.save();
	ctx.globalCompositeOperation = "lighter";
	for (var i = 0; i < particleList.length; i++) {
		particleList[i].draw();
	}
	ctx.restore();
};


Particle.prototype = {
	x: null,
	y: null,
	vx: 0,
	vy: 0,
	radius: 0,
	color: null,
	isRemove: false,

	create: function(){
		this.vx = Math.random() * 6 - 3;
		this.vy = Math.random() * (-2) - 1; // 常に負の数 いったん上にあげる
		this.radius = Math.random() * 5 + 3;
		var r = Math.floor(Math.random() * 155 + 100);
		var g = Math.floor(Math.random() * 155 + 100);
		var b = Math.floor(Math.random() * 155 + 100);
		var a = Math.random() * 1 + 0.3;
		this.color = "rgba("+r+","+g+","+b+","+a+")";
	},

	update: function(){
		this.vy += GRAVITY;
		this.x += this.vx;
		this.y += this.vy;
		this.radius *= .98; // 時間が経つにつれて小さく

		// パーティクルが外に出たら配列に追加させない
		if(this.x < 0 || this.x > SCREEN_WIDTH || this.y > SCREEN_HEIGHT){
			this.isRemove = true;
		}
	},

	draw: function(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fill();
	}

};
	


})();