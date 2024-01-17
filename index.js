let container;
let canvas;
let x;
let step;


function setup() {
    canvas = createCanvas(170,170);
    container = document.getElementById('dot');
    background(255);
    canvas.parent(container);
    y = height/2;
    step = 1;
    
}

function draw(){
    background(255);
    fill('black');
    circle( width/6 ,y ,20);
    
    y = y + step;
    if (y >= height - 20) {
        step = step * -1;
    }else if(y <= height/2){
        step = step * -1;
    }


}