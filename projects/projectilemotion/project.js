let position;
let velocity;
let gravity;
let velocityLimit;
let run;
let objectRadius;

let inputBox;
let angle;
let button;



function setup(){
    createCanvas(windowWidth - 20,windowWidth/1.5);
    background(200);
    frameRate(60);
    smooth();

    objectRadius = 10;
    angle = 90;

    initialCondition();


    button = createButton('Play');
    button.position(20,height + 20);
    button.mousePressed(()=>{
        run = true;
    })

    button = createButton('Pause');
    button.position(70,height + 20);
    button.mousePressed(()=>{
        run = false;
    })

    button = createButton('Restart');
    button.position(140,height + 20);
    button.mousePressed(()=>{
        initialCondition();
        draw();
    })

    inputBox= createInput(0);
    inputBox.size(50);
    inputBox.position(210,height + 20);

    button = createButton('Apply angle');
    button.position(260,height + 20);
    button.mousePressed(()=>{
        angle = inputBox.value();
        initialCondition();
        draw();
    })

}

function draw(){
    background(255);


    //***************************
    push();
    translate(10,height - objectRadius); 
    fill(0);
    circle(position.x,position.y,objectRadius);
    text('(' + round(velocity.mag() * 10) + 'm/s)',position.x -5,position.y - 10);
    text('Distance = (' + round(position.mag()) + 'm)',position.x - 5,position.y - 20);
    ground();
    pop();
    //***************************
 
    if(run){
        move();
        applyGravity();
        stopMotion();
    }
    
    
    //bounce();
}

function move(){
    velocity.limit(velocityLimit);
    position = position.add(velocity);
    velocity = velocity.add(acceleration);
}

function applyGravity(){
    velocity = velocity.add(gravity);
}

function bounce(){
    if (position.y > 0) {
        position.y = 0;
        velocity.y = velocity.y * -1;
    }
}
  
function stopMotion(){
    if (position.y > 0) {
        position.y = 0;
        velocity = velocity.mult(0);
        run = false;
    }
}

function ground(){
    fill('brown');
    noStroke();
    rect(-10,objectRadius/2,width+10,10);
    stroke(0);
}

function initialCondition(){
    position = createVector(0,0);
    velocity = createVector(1,1);
    acceleration = createVector(0,0);
    gravity = createVector(0,0.008);  
    run = true;
    
    if(angle !=0){
        velocity.set(velocity.mag() * cos(radians(angle)),-1 * velocity.mag() * sin(radians(angle)));   
    }else{
        velocity.set(0,0);
    }
    velocityLimit = velocity.mag();
    
}