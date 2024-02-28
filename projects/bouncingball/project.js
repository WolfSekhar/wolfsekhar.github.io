
let position;
let velocity;
let circleRadius;
let numberOfObjects;
let slider;

function setup() {
    createCanvas(windowWidth -20,windowHeight/1.5);
    background(200);
    frameRate(60);
    smooth(5);

    position = [];
    velocity = [];
    circleRadius = [];
    numberOfObjects = 5;

    
    initialValues();
    

    slider = createSlider(1,100,5);

}

function initialValues(){
    for(let i =0;i <numberOfObjects;i++){
        position.push(createVector(random(round(width/3)),random(round(height/3))));
        velocity.push(createVector(random(5), random(5)));
        circleRadius.push(random(20,60));
    }
}

function draw() {
    background(200);

    let tempNumberOfObjects = slider.value();

    if(numberOfObjects != tempNumberOfObjects){
        numberOfObjects = tempNumberOfObjects;
        initialValues();
        redraw();
    }

    push();
    translate(width / 2, height / 2);
    strokeWeight(1);
    for(let i =0;i < numberOfObjects;i++){
        circle(position[i].x, position[i].y, circleRadius[i]);
    }
    
    strokeWeight(2);
    arrow();
    pop();


    move();
    bounce();

}

function move() {
    for(let i =0;i <numberOfObjects;i++){
        position[i].add(velocity[i]);
    }
}

function arrow() {
    for(let i =0;i <numberOfObjects;i++){
        line(position[i].x,
            position[i].y,
            position[i].x + velocity[i].x * circleRadius[i] / 3,
            position[i].y + velocity[i].y * circleRadius[i] / 3);
        fill(0);
        circle(position[i].x + velocity[i].x * circleRadius[i] / 3,
            position[i].y + velocity[i].y * circleRadius[i] / 3,10);
    }
    

}

function bounce() {
    for(let i =0;i <numberOfObjects;i++){
        if (position[i].y >= height / 2 || position[i].y <= -height / 2) {
            velocity[i].y = velocity[i].y * -1;
        }
        if (position[i].x >= width / 2 || position[i].x <= -width / 2) {
            velocity[i].x = velocity[i].x * -1;
        }
    }
    
}