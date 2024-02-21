let noOfOrbits;
let orbitLocation;
let numberOfelectrons;
let p = 1;
let mAngle;
let speed;
let mAngleAdder;
let step;
let slider;
let colors;


function setup() {
    createCanvas(windowWidth -10, windowHeight/1.8);

    noOfOrbits = 1;
    orbitLocation = [];
    numberOfelectrons = [];
    mAngle = [];
    step = [];

    speed = [3,2,1,0.8,0.5,0.4,0.3,0.2,0.1,0.05];
    colors = ['black', '#7851a9', 'orange', '#1e90ff', '#E1C16E','#D35400', '#8E44AD', '#DE3163', '#CCCCFF' ];

    for (let i = 0; i < noOfOrbits; i++) {
        orbitLocation.push(createVector(30 * (i+1), 0));
        numberOfelectrons.push(2 * ((i+1) ** 2));
        step.push(0);
    }

    slider = createSlider(1,speed.length,1);

}

function reInitiateValues(){
    noOfOrbits = slider.value();
    orbitLocation = [];
    numberOfelectrons = [];
    mAngle = [];
    step = [];
    for (let i = 0; i < noOfOrbits; i++) {
        orbitLocation.push(createVector(30 * (i+1), 0));
        numberOfelectrons.push(2 * ((i+1) ** 2));
        step.push(0);
    }
}

function draw() {
    background(255);
    if(noOfOrbits != slider.value()){
        reInitiateValues();
    }
    


    push();
    translate(width / 2, height / 2);

    nucleus();
    orbits(noOfOrbits);

    for(let i = 0;i < noOfOrbits;i++){
        push();
        rotate(radians(step[i]));
        step[i] += speed[i];
        electrons(i + 1);
        pop();
    }

    
    
    pop();

}

function nucleus() {
    fill('#607D8B');
    circle(0, 0, 30);
}

function orbits(orbit) {
    noFill();
    for(let i = 0;i < orbit;i++){
        circle(0, 0, orbitLocation[i].x * 2);
    }
    
}

function electrons(orbitNumber) {
    let noelectrons = numberOfelectrons[orbitNumber - 1];
    let angleAdder = 360 / noelectrons;
    let angle = 0;
    for (let i = 0; i < noelectrons; i++) {
        let newX = orbitLocation[orbitNumber - 1].x * cos(radians(angle)) - orbitLocation[orbitNumber - 1].y * sin(radians(angle));
        let newY = orbitLocation[orbitNumber - 1].x * sin(radians(angle)) - orbitLocation[orbitNumber - 1].y * cos(radians(angle));
        fill(colors[orbitNumber-1]);
        circle(newX, newY, 20);
        angle += angleAdder;
    }

}