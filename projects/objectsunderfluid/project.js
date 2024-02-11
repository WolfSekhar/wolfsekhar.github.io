let position;
let fluidPosition;
let velocity;
let acceleration;
let force;
let viscosity;
let isMoving;
let colors;
let texts;


function setup(){
    createCanvas(windowWidth - 30,windowHeight / 1.5);
    background(250);

    isMoving = [true, true,true];
    viscosity = [0.3,0.9,0.6];
    position = [createVector(width/10,0),createVector(width * 4/10,0),createVector( 7*width/10,0)];
    fluidPosition = position;
    velocity = [createVector(0,0),createVector(0,0),createVector(0,0)];
    acceleration = [createVector(0,0),createVector(0,0),createVector(0,0)];
    force = [createVector(0,0.01),createVector(0,0.01),createVector(0,0.01)];
    colors = ['#FADBD8 ','#D5F5E3','#F6DDCC'];
    texts = ['High','Low','Medium']
    

}

function draw(){

    background(250);
    noStroke();

    fluids();
    balls();
    move();
    stopMotion();

    detailsText();
}

function fluids(){
    for(let i = 0; i<3;i++){
        fill(colors[i]);
        // -25 is done so that circle will exact above the rect
        rect(fluidPosition[i].x - 25,height/2,100,height/2);
    }
    
}

function detailsText(){
    for(let i = 0; i<3;i++){
    textSize(15);
    text(texts[i] + " Viscosity",fluidPosition[i].x - 15 ,height/2.3);
    }
}

function balls(){
    for(let i = 0; i<3;i++){
        fill(100);
        circle(position[i].x + 25 ,position[i].y,50);
    }
}

function move(){
    for(let i = 0; i<3;i++){
        if(isMoving[i]){
            position[i].add(velocity[i]);
            velocity[i].add(acceleration[i]);
            if(position[i].y > height/2){
                velocity[i].limit(viscosity[i]);
            }else{
                velocity[i].limit(1);
            }
            acceleration[i].add(force[i]);
        }
    }
}

function stopMotion(){
    
    for(let i = 0; i<3;i++){
        if(position[i].y > height - 25){
            isMoving[i] = false;
            position[i].y = height - 25;
        }
        
    }
}

