let container;
let canvas;
let x;
let step;
let colors;
let dot_radius;
let cindex;


function setup() {
    canvas = createCanvas(170,170);
    container = document.getElementById('dot');
    background(255);
    canvas.parent(container);
    y = height/2;
    step = 1;

    colors = ['black','#7851a9','orange','#1e90ff']
    dot_radius = 25;

    cindex = 0;
    
}

function draw(){
    background(255);
    dot(width/6,y,dot_radius,colors[cindex])
    
    y = y + step;
    if (y >= height - dot_radius/2) {
        step = step * -1;
        if(cindex < colors.length - 1){
            cindex = cindex + 1;
        }else{
            cindex = 0;
        }
    }else if(y <= height/2){
        step = step * -1;
    }


}

function dot(x,y,radius,color){
    fill(color);
    noStroke();
    circle( x,y,radius);
}