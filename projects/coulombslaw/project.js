let canvas;
let charge1 = [];
let charge2 = [];
let buttonPositiveCharges;
let buttonNegativeCharges;
let buttonOppositeCharges;
let positveImage,negativeImage;

let mCharge,nCharge;

let slider;
let sliderTempValue;

let buttonMinus;
let buttonPlus;

function preload(){
    positveImage = loadImage('/assets/positive.png');
    negativeImage = loadImage('/assets/negative.png');
}

function setup() {
    canvas = new Canvas(windowWidth - 20, windowHeight/1.8);

    chargeRadius = 30;

    // two positive charges
    charge1[0] = new Charge(width/2 - 30, height / 5, 1);
    charge2[0] = new Charge(width/2 + 30, height / 5, 1);

    // two negative charges
    charge1[1] = new Charge(width/2 - 30, height / 3, -1);
    charge2[1] = new Charge(width/2 + 30, height / 3, -1);

    // two opposite charges
    charge1[2] = new Charge(50, height / 2, 1);
    charge2[2] = new Charge(width - 50, height / 2, -1);

    // two controllable charges
    mCharge = new Charge(50,height/1.5,1);
    nCharge = new Charge(width - 50,height/1.5,1);

    buttonMinus = createButton('Minus');
    buttonPlus = createButton('Plus');

    // buttonPositiveCharges = createButton("Two +ve");
    // buttonNegativeCharges = createButton("Two -ve");
    // buttonOppositeCharges = createButton('Opposite Charges');

}

function draw() {
    background(255);

    // buttonPositiveCharges.mousePressed(() =>{
    //     charge1.sign = 1;
    //     charge2.sign = 1;
    // });

    buttonMinus.mousePressed(() => {
        if(dist(mCharge.x,mCharge.y,nCharge.x,nCharge.y) > 30){
            mCharge.x += 5;
            nCharge.x -= 5;
        }
        
    });

    buttonPlus.mousePressed(() => {
        if(dist(mCharge.x,mCharge.y,nCharge.x,nCharge.y) < width - 30){
            mCharge.x -= 5;
            nCharge.x += 5;
        }
        
    });

    for (let i = 0; i < 3; i++) {
        
        mline(charge1[i].x, charge1[i].y, charge2[i].x, charge2[i].y);
        

        charge1[i].show();
        charge2[i].show();

        if(dist(charge1[i].x, charge1[i].y, charge2[i].x, charge2[i].y) < width - 30){
            if (dist(charge1[i].x, charge1[i].y, charge2[i].x, charge2[i].y) > 30) {
                if(charge1[i].sign == charge2[i].sign){
                    charge1[i].x -= 0.5;
                    charge2[i].x += 0.5;
                }else{
                    charge1[i].x += 0.5;
                    charge2[i].x -= 0.5;
                }
                
            }
        }

    }



    // controllable line
    mline(mCharge.x,mCharge.y,nCharge.x,nCharge.y);

    // Controllable charges
    mCharge.show();
    nCharge.show();

    // show distance between charges
    let distance = dist(mCharge.x,mCharge.y,nCharge.x,nCharge.y);
    stroke(0);
    strokeWeight(1);
    
    textSize(15);
    text("Distance between Charges:  " + distance + " Units",5,height - 60);
    text("Force between Charges:  " + round(100000/(distance ** 2),6) + ' Units' ,5,height - 30);
    

}

function mline(x1, y1, x2, y2) {
    strokeWeight(1);
    stroke(0);
    line(x1, y1, x2, y2);
    noStroke();
}

class Charge {
    constructor(x, y, sign) {
        this.x = x;
        this.y = y;
        this.sign = sign;
        this.size = 30;
        this.color = ['red', 'blue'];
    }
    show() {

        if (this.sign == 1) {
            //fill(this.color[0]);
            //circle(this.x, this.y, this.size);
            image(positveImage,this.x -16,this.y - 16);
        
        } else {
            //fill(this.color[1]);
            //circle(this.x, this.y, this.size);
            image(negativeImage,this.x - 16,this.y - 16);
        }

    }


}