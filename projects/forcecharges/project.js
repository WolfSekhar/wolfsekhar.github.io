

let chargesPosition;
let chargesDirection;
let radius;
let colors;
let charges;
let chargesIndex;

function setup(){
    createCanvas(windowWidth - 10,windowHeight/2);
    background(255);
    frameRate(60);
    createCharges();

    chargesDirection = [];
    colors = ['red','blue'];
    charges = ['p','n'];
    radius = 40;
    chargesIndex = 2;

    

    
}

function draw(){ 
    background(255);
    

 
    push();
    translate(width/2,height/2);
    for(let i = 0;i < 2;i++){
        noStroke();
        if(chargesIndex == 0){
            fill(colors[0]);
            circle(chargesPosition[i].x,chargesPosition[i].y,radius);
        }else if(chargesIndex == 1){
            fill(colors[1]);
            circle(chargesPosition[i].x,chargesPosition[i].y,radius);
        }else{
            fill(colors[i]);
            circle(chargesPosition[i].x,chargesPosition[i].y,radius);
            
        }
        
    }
    pop();

    setDirection();
    move();

}

function move(){
    if(chargesPosition[0].x != chargesPosition[1].x - radius ||
        chargesPosition[0].y != chargesPosition[1].y ){
            if(chargesIndex == 0 || chargesIndex == 1){
                chargesPosition[0].sub(chargesDirection[0]);
                chargesPosition[1].sub(p5.Vector.mult(chargesDirection[0],(-1)));
            }else{
                chargesPosition[0].add(chargesDirection[0]);
                chargesPosition[1].add(p5.Vector.mult(chargesDirection[0],(-1)));
            }
        
    }
    
}

function createCharges(){
    chargesPosition = [];
    chargesPosition.push(createVector(-50,0));
    chargesPosition.push(createVector(50,0));
}

function setDirection(){
    chargesDirection.push((p5.Vector.sub(chargesPosition[0],chargesPosition[1]).normalize()));

}

