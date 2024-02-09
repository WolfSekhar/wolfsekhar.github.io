

let chargesPosition;
let chargesDirection;
let radius;
let colors;
let charges;
let chargesIndex;
let numberOfCharges;

function setup(){
    createCanvas(windowWidth - 10,windowHeight * 0.9);
    background(255);
    frameRate(60);
    

    chargesDirection = [];
    colors = ['red','blue'];
    charges = ['p','n'];
    radius = 20;
    chargesIndex = 1;
    numberOfCharges = 50;
    createCharges();
    

    
}

function draw(){ 
    background(255);
    

 
    push();
    translate(width/2,height/2);
    // nucleus
    strokeWeight(3);
    circle(0,0,width/2.5);

    for(let i = 0;i < numberOfCharges;i++){
        noStroke();
        fill('green');
        circle(chargesPosition[i].x,chargesPosition[i].y,radius);
        
    }
    pop();

    move();

}


function move(){
    for(let i = 0;i < numberOfCharges;i++){
        for(let j = 0;j < numberOfCharges;j++){
            if(i != j){
                let mover = p5.Vector.add(chargesPosition[j],chargesPosition[i]);
                mover.normalize();
                mover.mult(0.05);
                chargesPosition[i].add(mover);
                chargesPosition[i].set(round(chargesPosition[i].x,2),round(chargesPosition[i].y,2));
            }
            
        }
    }

}

function createCharges(){
    chargesPosition = [];
    for(let i =0;i< numberOfCharges;i++){
        let temp1 = round(random(-70,70));
        let temp2 = round(random(-70,70));
        chargesPosition.push(createVector(temp1,temp2));
    }
}

function setDirection(){
    chargesDirection.push((p5.Vector.sub(chargesPosition[0],chargesPosition[1]).normalize()));

}

