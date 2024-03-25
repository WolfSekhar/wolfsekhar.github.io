let canvas;
let object;
let velocity;
let acceleration;
let force;
let friction;
let position;

let pg;

let counter = 0;
let myCurve = [];

function setup(){
    canvas = new Canvas(windowWidth - 30,windowHeight/1.6);
    pg = createGraphics(windowWidth - 30,height/1.9);
    pg.background(0);
    frameRate(24);

    position = createVector(0,0);
    velocity = createVector(0,0);
    acceleration = createVector(0,0);
    force = createVector(5,0);
    friction = createVector(0.1,0);
    

    object = new Sprite();
    object.diameter = 20;
    object.x = object.y = 0;
    

    acceleration.add(force);
    
    
}

function draw(){
    clear();
    //pg.background(0);
    translate(width/2,height/4);




    fill(0);
    stroke(0);
    strokeWeight(0.5);
    text("Mean position",-30,50);
    text("Maximum Velocity ",-30,30);
    circle(0,0,5);


    text('a: ' + round(acceleration.x,2),object.x - 30,-30);
    text('x: ' + round(object.x,2),object.x - 30,-45);

    move();
    line(0,0,0,-height/2);
    drawCurve();

    
    
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

function drawCurve(){
    push();
    translate(-width/2,80);
    pg.fill(255);
    pg.strokeWeight(1);
    pg.stroke(255);
    pg.line(width/2,0,width/2,height);
    pg.noStroke();
    if(counter < 300){ // using to control uneccessary out of  screen rendering 
        
        pg.circle(object.x + width/2,counter,5);
        counter += 0.5;

    }
    image(pg,0,0);
    pop();
    
}

