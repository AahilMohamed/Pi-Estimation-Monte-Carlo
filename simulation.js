let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); 
let dotcount = document.querySelector("#dotcount");
let currentCircleCountEl = document.getElementById("currentCircleDot")
let currentCountEl = document.getElementById("currentDotCount")
let estimatedPiEl = document.getElementById("estimatedValue")
let diffEl = document.getElementById("diff")
let totdots = 0;
let dotsInCircle = 0;
let simulation;

//Drawing Square
function rect() {
    ctx.strokeRect(0, 0, canvas.height, canvas.width);
}

//Drawing Circle fit into square
function circle(x, y, r, color) {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.stroke();
}

//To animate drawing of points
function startSim() {
    simulation = setInterval(runSimulation, 35)
    if (totdots >= dotcount.value) {
        clearInterval(simulation) 
    }
}

//Drawing random points inside Canvas
function dot() {
    let dotx = Math.floor(Math.random() * 498) + 1;
    let doty = Math.floor(Math.random() * 498) + 1;
    ctx.beginPath();
    ctx.fillStyle = "#FF0000"
    ctx.arc(dotx, doty, 2, 0, Math.PI * 2, true);
    ctx.fill();
    totdots += 1;
    distanceCalc(dotx,doty)
}

//Pythatgoras Theorum
function distanceCalc(x, y) {
    let vertical = Math.abs(canvas.width/2 - x);
    let horizontal = Math.abs(canvas.height/2 - y);
    let distance = Math.sqrt(vertical**2 + horizontal**2)
    if (distance <= canvas.width/2) {
        dotsInCircle += 1;
    }
}

//Ratio of points in circle over total points
function estimatePi() {
    let calcPi = 4 * (dotsInCircle/totdots);
    percentAccuracy = 100 * (calcPi/Math.abs(Math.PI));
    currentCircleCountEl.innerText = "Dots inside circle: " + dotsInCircle;
    currentCountEl.innerText = "Total Count: " + totdots;
    estimatedPiEl.innerText = "Estimated value of pi: " + calcPi
    diffEl.innerText = "Accuracy of simulation: " + percentAccuracy
}

function runSimulation() {
    dot()
    estimatePi()
}

rect();
circle(canvas.width/2, canvas.height/2, canvas.width/2, "#000000");