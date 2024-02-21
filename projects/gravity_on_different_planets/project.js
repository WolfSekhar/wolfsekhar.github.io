let canvas;
let objects;
let surfaces;
let increment = 20;
let gravityOfPlanets;
let planetNames;


function setup(){
    canvas = new Canvas(windowWidth- 20,windowHeight/2);

    objects = [];
    surfaces = [];
    planetNames = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']
    gravityOfPlanets = [3.61,8.33,9.8,3.75,26.0,11.2,12.5,13.3,0.61];
    world.gravity.y = 0.1;

    for(let i = 0 ;i < 9;i++){
        let object = new Sprite();// objects are created
        object.diameter = 20;
        object.y = 0;
        object.x = 10 + increment; // initial position set
        object.color = 'DimGray';
        objects.push(object);

        // surfaces of diffrent planets
        let surface = new Sprite();
        surface.width = 30;
        surface.height = 5;
        surface.x = 10 + increment;
        surface.y = height - 30;
        surface.collider = 'static';

        surfaces.push(surface);
        increment += 40;
    }

    
}

function draw(){
    clear();
    for(let i = 0 ;i < 9;i++){
        objects[i].applyForceScaled(0,gravityOfPlanets[i] * 0.1);

        text(planetNames[i],surfaces[i].x - 15,surfaces[i].y + 20);
    }
}