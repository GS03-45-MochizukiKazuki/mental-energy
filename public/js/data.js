
var canvas;         // the canvas element
var context;        // the 2d context of the canvas
var stage;          // the createjs stage
var emitter;        // the emitter
var particleImage;  // the image to use for each particle

var $len_all = $('.genre-item').length;
var $len_undone = $('.flag0').length;
var $len_done = $len_all - $len_undone;

var user_energy = $len_done / $len_all;
var user_score = (user_energy * 100).toFixed(1);
var r = Math.floor(Math.random() * 155 ) + 100;
var g = Math.floor(Math.random() * 155 ) + 100;
var b = Math.floor(Math.random() * 155 ) + 100;
var rnd1 = Math.floor(Math.random() * 30) + 20;
var rnd2 = Math.floor(Math.random() * 30) + 20;
var rnd3 = Math.floor(Math.random() * 30) + 20;
console.log(r + ', '+ g + ', ' + b);

var pspeed = 150 * user_energy;
var psize = 140 * user_energy;
var prate = 500 * user_energy;

var percent = document.getElementById("percent");
percent.innerHTML = '<span class="score">' + user_score +'</span> %';

function init() {
    particleImage = new Image();
    particleImage.onload = initCanvas;
    particleImage.src = "images/particle_base.png";

}

function initCanvas() {
    canvas = document.getElementById('particleEmitterCanvas');
    context = canvas.getContext("2d");
    stage = new createjs.Stage(canvas);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.addListener(update);

    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }

    addParticleEmitter(canvas.width / 2, canvas.height * 3 / 4);

    handleResize();
    window.addEventListener("resize", handleResize);

    stage.addEventListener("stagemousemove", handleMove);
}

function addParticleEmitter(x, y) {

    emitter = new createjs.ParticleEmitter(particleImage);
    emitter.position = new createjs.Point(x, y);

    emitter.emitterType = createjs.ParticleEmitterType.Emit;
    emitter.emissionRate = prate;
    emitter.maxParticles = 10000;
    emitter.life = 3000;
    emitter.lifeVar = 500;
    emitter.speed = pspeed;
    emitter.speedVar = 30;
    emitter.positionVarX = 50;
    emitter.positionVarY = 50;
    emitter.accelerationX = 0;
    emitter.accelerationY = 0;
    emitter.radialAcceleration = 1;
    emitter.radialAccelerationVar = 0;
    emitter.tangentalAcceleration = 50;
    emitter.tangentalAccelerationVar = 10;
    emitter.angle = 180;
    emitter.angleVar = 180;
    emitter.startSpin = 0;
    emitter.startSpinVar = 0;
    emitter.endSpin = null;
    emitter.endSpinVar = null;
    emitter.startColor = [r, g, b];
    // emitter.startColor = [200, 128, 255];
    // emitter.startColor = [255, 200, 150];
    // emitter.startColorVar = [60, 20, 20];
    emitter.startColorVar = [rnd1, rnd2, rnd3];
    emitter.startOpacity = 1;
    emitter.endColor = null;
    emitter.endColorVar = null;
    emitter.endOpacity = null;
    emitter.startSize = psize;
    emitter.startSizeVar = 10;
    emitter.endSize = 0;
    emitter.endSizeVar = 20;

    stage.addChild(emitter);
}

function update() {
    stage.update();
}

function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    emitter.position = new createjs.Point(canvas.width / 2, canvas.height * 3 / 4);
}

function handleMove(event){
    emitter.position = new createjs.Point(event.stageX, event.stageY);
}

var degree = 0;   // 角度
var radius = 300; // 半径

function autoMove(){
    degree += 1;
    // 角度をラジアンに変換
    var rad = degree * Math.PI / 180;

    // 中心点
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    
    var x = radius * 1.5 * Math.cos(rad);
    var y = radius * Math.sin(rad);

    emitter.position = new createjs.Point(cx+x, cy+y);
}
setInterval(function(){
    autoMove();
}, 15);


// blur

// var $main = $('main');

// setTimeout(function(){
//     $main.removeClass('blur');
//     $main.addClass('blurInfi');
// }, 5000);



/* ======================================
 * BGM
 * ====================================== */
var h = (new Date).getHours();

var bgm_am_high = document.getElementById("bgm_am_high");
var bgm_pm_high = document.getElementById("bgm_pm_high");
var bgm_am_low = document.getElementById("bgm_am_low");
var bgm_pm_low = document.getElementById("bgm_pm_low");

if (h > 5 && h < 18) {
    if (user_score > 60) {
        bgm_am_high.play();
        bgm_am_high.volume = 0.4;
        bgm_am_high.loop = true;
    } else {
        bgm_am_low.play();
        bgm_am_low.volume = 0.5;
        bgm_am_low.loop = true;
    }
} else {
    if (user_score > 60) {
        bgm_pm_high.play();
        bgm_pm_high.volume = 0.4;
        bgm_pm_high.loop = true;
    } else {
        bgm_pm_low.play();
        bgm_pm_low.volume = 0.7;
        bgm_pm_low.loop = true;
    }
}


    



