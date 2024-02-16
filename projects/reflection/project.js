let position;
let velocity;
let slider;
let changed;
let ifNormal;
let normalPosition;
let col;

function setup() {
    createCanvas(windowWidth - 30,windowHeight / 1.5);
    background(250);
    frameRate(60);
    smooth(3);

    changed = false;
    position = createVector(0,0);
    velocity = createVector(1,0.5);
    tempVelocity = velocity;

    slider = createSlider(1,10,5);
    tempSlider = 5;
    ifNormal = false;
    normalPosition = createVector(0,0);
    col = 0;
}

function draw(){
    //background(250);

    reflectingSurface();
    lightRay();
    motionOfLight();
    reflect();

    if(slider.value() != tempSlider){
        tempSlider = slider.value();
        background(250);
        position.set(0,0);
        velocity.set(1,tempSlider * 0.1);
        col = 0;
        normalPosition.set(0,0);
    }
    drawNormal(ifNormal);
    
}

function reflectingSurface(){
    strokeWeight(1);
    stroke(0);
    line(width/2,0,width/2,height);
    strokeWeight(3);
    stroke('red');
    line(width/2 + 5,0,width/2 + 5,height);
}

function lightRay(){
    noStroke();
    fill(col);
    circle(position.x,position.y,2);
}

function motionOfLight(){
    position.add(velocity);
}

function reflect(){
    if(position.x >= width/2){
        velocity.x = velocity.x * -1;
        ifNormal = true;
        normalPosition.set(position.x,position.y);
        col = 'green';
        
    }
}

function drawNormal(yes){
    if(yes){
        stroke('blue');
        strokeWeight(1);
        line(0,normalPosition.y,normalPosition.x,normalPosition.y);
    }
}