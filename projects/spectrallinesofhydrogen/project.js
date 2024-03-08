let orbitPostions;
let slider;
let canvas;
let mrect;
let dom;
let tempPostionFromTOp;
let x,y;
let isInMotion;
let tempx,tempy;
let button;
let tempSliderValue;
let colors = ['#884EA0','#2E86C1','#229954','#F1C40F','#E67E22','#E74C3C','black'];
let color;
let seriesNames = ['Lyman','Balmer','Paschen','Brackett','Pfund','Humphreys'];

function setup() {
    dom = document.getElementById('main');
    canvas = createCanvas(windowWidth - 100,windowHeight/1.2);
    canvas.parent(dom);
    tempPostionFromTOp = canvas.elt.offsetTop;

    instantiateInitialValues();
    Ui();

    tempSliderValue = 2;
    x = orbitPostions[slider.value() - 1][0] + 50;
    y = orbitPostions[slider.value() - 1][1];
    tempx = x;
    tempy = y;
}

function draw(){
    background(255);

    orbits();
    
    if(tempy != y){
        tempy = y;
    }

    if(!isInMotion && tempSliderValue != slider.value()){
        y = orbitPostions[slider.value() - 1][1];
        tempSliderValue = slider.value();
    }
    
    electron(x,y,tempSliderValue - 1);
    electron(x + 15,y,tempSliderValue - 1);
    electron(x + 30,y,tempSliderValue - 1);
    electron(x + 45,y,tempSliderValue - 1);
    
    move();

    strokeWeight(0);
    fill(0);
    if(isInMotion){
        text(seriesNames[tempSliderValue - 2],canvas.elt.offsetWidth - 100,tempPostionFromTOp);
    }
    
    //glow();
}

function instantiateInitialValues(){
    orbitPostions = [];
    color = 2;
    x = y = 0;
    isInMotion = false;
    for(let i = 1;i<8;i++){
        orbitPostions.push([width/10,height/(i + 0.02)]); // different x,y locations for nicer orbit representation
    }
}

function orbits(){
    for(let i = 0;i<7;i++){
        stroke(0);
        strokeWeight(2);
        line(orbitPostions[i][0],orbitPostions[i][1],orbitPostions[i][0] + width/2,orbitPostions[i][1]);
        strokeWeight(0);
        text('n = '+ (i+1),orbitPostions[i][0],orbitPostions[i][1]-2);// orbit names
    }
}

function electron(x,y,colorNum){
    fill(colors[colorNum]);
    noStroke();
    circle(x,y,12);
}

function Ui(){
    slider = createSlider(1,7,2);
    slider.position(canvas.elt.offsetWidth - 70,tempPostionFromTOp + height/2);
    slider.style('width','200px');
    slider.style('transform','rotate(270deg)');
    

    button = createButton('Run');
    button.position(canvas.elt.offsetWidth+ 15,tempPostionFromTOp + height/2 + 120);
    button.mousePressed(() => {
        isInMotion = true;
    });

    
}

function move(){
    if(isInMotion && slider.value() != 1){
        if(y < orbitPostions[slider.value() - 2][1]){
            y = y + 0.5;
        }else{
            isInMotion = false;
        }
    }
}

// this function is to let user know that the wavelength falls in which spectrum
function glow(){

    noFill();
    stroke(0);
    strokeWeight(1);

    circle(width - 50,height/2,70);

    for(let i = 10;i < 61; i = i + 10){
        if(frameCount % i == 0){
            stroke(colors[i/10]);
            circle(width - 50,height/2,i);
        }
    }
    
    
    

}


