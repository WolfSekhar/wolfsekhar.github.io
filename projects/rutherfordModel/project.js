let nucleusSprite;
let orbitSprite;
let alphaSprite = [];
let invisibleNuclearForceSprite;
let adder = 30;
let gunSprite;

let path=[];
let IsToStore;
let canvas;
let buttonFire;

function setup(){
    new Canvas(windowWidth - 20,windowHeight/1.7);
    nuclearForce();
    nucleus();
    gun();
    
    buttonFire = createButton('Fire');
    buttonFire.mousePressed(() => {
        buttonIsPressed = true;
        alphaParticle(gunSprite.x,gunSprite.y);
    });
}

function draw(){
    //clear();
    background(255);
    
    if(keyboard.presses("up") || keyboard.pressing("up")){
        gunSprite.y = gunSprite.y -1;
    }else if(keyboard.presses("down")  || keyboard.pressing("down")){
        gunSprite.y = gunSprite.y +1;
    }else if(keyboard.presses("space")){
        alphaParticle(gunSprite.x,gunSprite.y);
    }
    
    for(let touch of touches){
        if(touch.y < height){
            gunSprite.y = touch.y;
        }
    }
   
    

    IsToStore = false;
    if(frameCount % 5 == 0){
        IsToStore = true;
    } 
    if(frameCount % 10   == 0){
        for(let i = 0;i < 5;i++){
        path.shift();
        }
    }

    for(let i = 0;i < alphaSprite.length;i++){
        if(alphaSprite[i].collided(invisibleNuclearForceSprite)){
            alphaSprite[i].overlaps(allSprites);
        }
        if(IsToStore){
            storePath(alphaSprite[i].x,alphaSprite[i].y);
        }
        
    }

    orbit(); 
    
    displayPath();
    lables();

    removeSprites();
    console.log(alphaSprite.length);
}

function nucleus(){
    nucleusSprite = new Sprite();
    nucleusSprite.diameter = 20;
    nucleusSprite.x = width - 100;
    nucleusSprite.collider = 'static';
}

function nuclearForce(){
    invisibleNuclearForceSprite = new Sprite();
    invisibleNuclearForceSprite.diameter = 100;
    invisibleNuclearForceSprite.x =  width - 100
    invisibleNuclearForceSprite.collider = 'static';
    invisibleNuclearForceSprite.color = 255;
    invisibleNuclearForceSprite.stroke = 255;
}

function alphaParticle(x,y){
    let sprite = new Sprite();
    sprite.diameter = 10;
    sprite.y = y;
    sprite.x = x;
    sprite.vel.x = 3;
    alphaSprite.push(sprite);
}
 
function orbit(){
    stroke(0);
    circle(width - 100,height/2,200);
}

function gun(){
    gunSprite = new Sprite();
    gunSprite.x = 0;
    gunSprite.y = height/2;
    gunSprite.h = 10;
    gunSprite.collider = 'none';
}

function displayPath(){
    path.forEach(element => {
        circle(element[0],element[1],1);
    });
}

function storePath(x,y){
    path.push([x,y]);
}

function lables(){
    text('Alpha Gun',gunSprite.x,gunSprite.y + 20);
    text('Nucleus of Gold (+ve)',nucleusSprite.x - 50,nucleusSprite.y + 150);
}

function removeSprites(){
    for(let i = 0;i < alphaSprite.length;i++){
        if(alphaSprite[i].x > width || alphaSprite[i].x < 0 ||
            alphaSprite[i].y > height || alphaSprite[i].y < 0){
            let index = alphaSprite.indexOf(alphaSprite[i]);
            if (index > -1){

            }
            alphaSprite.splice(index,1);
        }
    }
}