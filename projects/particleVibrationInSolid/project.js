
let ball;
let slider;
let tempSlider;
let numberOfCharges;
let isCollided;
function setup() {
    createCanvas(windowWidth -20,windowHeight/1.7);
    
    ball = [];
    numberOfCharges = 20;
    
    frameRate(60);

    for(let i = 0; i < numberOfCharges;i++){
        ball.push(new Ball(random(- width/2,width/2),random(-height/2,height/2)));
    }

    slider = createSlider(2,100,numberOfCharges);
    tempSlider = slider.value();
    isCollided = false;
    
    

}

function draw(){
    background(255);
    

    push();
    translate(width/2,height/2);

    if(slider.value() !== tempSlider){
        tempSlider = slider.value();
        numberOfCharges = tempSlider;

        //ball = [];

        for(let i = 0; i < numberOfCharges;i++){
            ball.push(new Ball(random(- width/2,width/2),random(-height/2,height/2)));
        }
    }

    
    for(let i = 0; i < numberOfCharges ;i++){
        ball[i].display();
    }

    // check collision
    for(let i = 0; i < numberOfCharges;i++){
        for(let j = 0; j < numberOfCharges;j++){
            if(i != j){
                if(dist(ball[i].x,ball[i].y,ball[j].x,ball[j].y) < 20){
                    isCollided = true;
                    break;
                }
            }  
        }
        if(!isCollided){
            randomMotion(i);
        }
        isCollided = false;
    }
    
    
    pop();

}

function randomMotion(i){
    // for(let i = 0; i < numberOfCharges;i++){
    //     ball[i].x += random(-10,10) * 0.01;
    //     ball[i].y += random(-10,10) * 0.01;
    // }
    ball[i].x += random(-10,10) * 0.1;
    ball[i].y += random(-10,10) * 0.1;
    
    
}