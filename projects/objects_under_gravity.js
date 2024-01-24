
let position;
let velocity;
let acceleration;
let colors;
let particles_radius;
let cindex;
let initialpositionIncrement;
let noOfObjects;
let mass;

let slider;


function setup() {


    canvas = createCanvas(windowWidth, windowHeight / 2);
    canvas.parent(document.getElementById('body'));
    background(255);
    frameRate(60);

    noOfObjects = 10;
    
    initialSetupValue();


    colors = ['black', '#7851a9', 'orange', '#1e90ff', '#D35400', '#8E44AD', '#DE3163', '#CCCCFF', '#E1C16E']


    cindex = 0;

    slider = createSlider(0,10,2);
    slider.position(50,250);
    slider.size(200);

    for(let i = 0; i < 100; i++){
        console.log(random(0.11,0.99));
    }

}

function draw() {
    background(255);

    rect(0,height - 2,width,20);

    if(noOfObjects != slider.value()){
        noOfObjects = slider.value();
        initialSetupValue();
    }
    

    for (let i = 0; i < noOfObjects; i++) {
        particles(position[i].x, position[i].y, particles_radius[i], colors[1]);
    }



    motion();

    for (let i = 0; i < noOfObjects; i++) {
        if (position[i].y > height - (particles_radius[i] / 2)) {
            position[i].set(position[i].x,height - (particles_radius[i] / 2));
            //velocity[i].set(velocity[i].x, velocity[i].y * -1);
            //changeColor();
        } if (position[i].x > (width - (particles_radius[i] / 2)) || position[i].x < (0 + (particles_radius[i] / 2))) {
            //velocity[i].set(velocity[i].x * -1, velocity[i].y);
        }
    }



}

function particles(x, y, radius, color) {
    fill(color);
    noStroke();
    //circle(x, y, radius);
    square(x, y, radius/2);
}

function motion() {
    for (let i = 0; i < noOfObjects; i++) {
        position[i] = position[i].add(velocity[i]); // velocity
        velocity[i] = velocity[i].add(acceleration[i]); // acceleration

        // limiting vector magnitude
        //velocity[i] = velocity[i].limit(4);
    }
}

function changeColor() {
    if (cindex < colors.length - 1) {
        cindex = cindex + 1;
    } else {
        cindex = 0;
    }
}

function initialSetupValue(){
    position = [];
    velocity = [];
    acceleration = [];
    mass = [];
    
    particles_radius = [];

    initialAcceleration = 0.001;
    accelStep = -0.01;

    initialpositionIncrement = width/(noOfObjects+ 1);
    positionIncrement = initialpositionIncrement;

    for (let i = 0; i < noOfObjects; i++) {

        position.push(createVector(0, 0));
        position[i].set(initialpositionIncrement, height/8);
        console.log(initialpositionIncrement);
        initialpositionIncrement += positionIncrement;

        mass.push(random(0.05,2.0));
        

        velocity.push(createVector(0, 0.1));

        acceleration.push(createVector(0, initialAcceleration  + mass[i] * 0.1 ));
        //initialAcceleration += accelStep;
        particles_radius.push(mass[i] * 50);
    }

}