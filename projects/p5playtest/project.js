let canvas;
let ball;
let ground;


function setup(){
    canvas = new Canvas(500,450);


    world.gravity.y = 1;

    ball = new Sprite();
    ball.diameter = 50;

    ground = new Sprite();
    ground.width = 1000;
    ground.height = 2;
    ground.position.y = height;
    ground.collider = 's';
    
    
    
}

function draw(){
    background(255);

    if(kb.presses(' ')){
        ball.position.y += -100;
    }
    
}

