let canvas;
let object;
let velocity;
let acceleration;
let force;
let friction;
let position;


function setup(){
    canvas = new Canvas(windowWidth-50,windowHeight/1.6);
    frameRate(60);
    extremeFound = false;

    position = createVector(0,0);
    velocity = createVector(0,0);
    acceleration = createVector(0,0);
    force = createVector(5,0);
    friction = createVector(0.1,0);
    

    object = new Sprite();
    object.diameter = 50;
    object.x = object.y = 0;
    object.color = 'blue';

    acceleration.add(force);
    

}

function draw(){
    background(255);

    translate(width/2,height/2);
    fill(0);

    
    text("Mean position",-30,50);
    text("Maximum Velocity ",-30,30);
    circle(0,0,10);


    text('Acceleration :' + round(acceleration.x,2),object.x,-30);

    move();
    line(0,0,0,-height/2);
    
}

function move(){
    velocity.set(0,0);

    if(object.x >= 0){
        acceleration.sub(friction);
    }else{
        acceleration.add(friction);
    }


    velocity.add(acceleration);
    
    object.x = object.x + velocity.x;
    object.y = object.y + velocity.y;


    
    
}

function applyForce(){
    
}
