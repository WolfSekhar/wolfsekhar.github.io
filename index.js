let container;
let canvas;

let position;
let velocity;
let acceleration;

let step;
let colors;
let dot_radius;
let cindex;

let mySubNameWidth;
let mySubNameHeight;


function setup() {
    
    container = document.getElementById('dot');
    let mySubNameId = document.getElementById('my-name-sub');
    mySubNameHeight = mySubNameId.offsetHeight;
    mySubNameWidth = mySubNameId.offsetWidth;


    canvas = createCanvas(170,mySubNameHeight/1.2);
    background(255);
    canvas.parent(container);
    frameRate(60);


    position = createVector(0,0);
    position.set(width/6,height/2);

    velocity = createVector(2,0.1);

    acceleration = createVector(0,0.1);

    colors = ['black','#7851a9','orange','#1e90ff']
    dot_radius = 25;

    cindex = 0;
    
}

function draw(){
    background(255);

    dot(position.x,position.y,dot_radius,colors[cindex])

    motion(position);

    if(position.y > height - (dot_radius/2)){
        velocity.set(velocity.x,velocity.y * -1);
        changeColor();
    }if(position.x > (width - (dot_radius/2)) || position.x < (0 + (dot_radius/2))){
        velocity.set(velocity.x * -1,velocity.y);
    }


}

function dot(x,y,radius,color){
    fill(color);
    noStroke();
    circle( x,y,radius);
}

function motion(position){
    position = position.add(velocity); // velocity
    velocity = velocity.add(acceleration); // acceleration

    // limiting vector magnitude
    velocity.limit(4);
}

function changeColor(){
    if(cindex < colors.length - 1){
        cindex = cindex + 1;
    }else{
        cindex = 0;
    }
}