
var canvas2;         // the canvas2 element
var context2;        // the 2d context2 of the canvas2
var stage2;          // the createjs stage2
var emitter2;        // the emitter2
var particleImage2;  // the image to use for each particle

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

// var percent = document.getElementById("percent");
// percent.innerHTML = '<span class="score">' + user_score +'</span> %';

function init2() {
    particleImage2 = new Image();
    particleImage2.onload = initCanvas2;
    particleImage2.src = "images/particle_base.png";

}

function initCanvas2() {
    canvas2 = document.getElementById('particleEmitterCanvas2');
    context2 = canvas2.getContext("2d");
    stage2 = new createjs.Stage(canvas2);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.addListener(update2);

    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage2);
    }

    addParticleEmitter2(canvas2.width / 2, canvas2.height * 3 / 4);

    handleResize2();
    window.addEventListener("resize", handleResize2);

    stage2.addEventListener("stagemousemove", handleMove2);
}

function addParticleEmitter2(x, y) {

    emitter2 = new createjs.ParticleEmitter(particleImage2);
    emitter2.position = new createjs.Point(x, y);

    emitter2.emitterType = createjs.ParticleEmitterType.Emit;
    emitter2.emissionRate = prate;
    emitter2.maxParticles = 10000;
    emitter2.life = 3000;
    emitter2.lifeVar = 500;
    emitter2.speed = pspeed;
    emitter2.speedVar = 30;
    emitter2.positionVarX = 50;
    emitter2.positionVarY = 50;
    emitter2.accelerationX = 0;
    emitter2.accelerationY = 0;
    emitter2.radialAcceleration = 1;
    emitter2.radialAccelerationVar = 0;
    emitter2.tangentalAcceleration = 60;
    emitter2.tangentalAccelerationVar = 10;
    emitter2.angle = 180;
    emitter2.angleVar = 180;
    emitter2.startSpin = 0;
    emitter2.startSpinVar = 0;
    emitter2.endSpin = null;
    emitter2.endSpinVar = null;
    emitter2.startColor = [r, g, b];
    // emitter2.startColor = [200, 128, 255];
    // emitter2.startColor = [255, 200, 150];
    // emitter2.startColorVar = [60, 20, 20];
    emitter2.startColorVar = [rnd1, rnd2, rnd3];
    emitter2.startOpacity = 1;
    emitter2.endColor = null;
    emitter2.endColorVar = null;
    emitter2.endOpacity = null;
    emitter2.startSize = psize;
    emitter2.startSizeVar = 10;
    emitter2.endSize = 0;
    emitter2.endSizeVar = 20;

    stage2.addChild(emitter2);
}

function update2() {
    stage2.update2();
}

function handleResize2() {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

    emitter2.position = new createjs.Point(canvas2.width / 2, canvas2.height * 1 / 4);
}

function handleMove2(event){
    emitter2.position = new createjs.Point(event.stageX, event.stageY);
}

