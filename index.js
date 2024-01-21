
// This is for the dot animation
var sketchTwo = function (p) {
    p.setup = function () {
        p.container = document.getElementById('dot');
        p.mySubNameId = document.getElementById('my-name-sub');
        p.mySubNameHeight = p.mySubNameId.offsetHeight;
        p.mySubNameWidth = p.mySubNameId.offsetWidth;


        p.canvas = p.createCanvas(170, p.mySubNameHeight / 1.2);
        p.background(255);
        p.canvas.parent(p.container);
        p.frameRate(60);


        p.position = p.createVector(0, 0);
        p.position.set(p.width / 6, p.height / 2);

        p.velocity = p.createVector(2, 0.1);

        p.acceleration = p.createVector(0, 0.1);

        p.colors = ['black', '#7851a9', 'orange', '#1e90ff']
        p.dot_radius = 25;

        p.cindex = 0;

    }

    p.draw = function () {
        p.background(255);

        dot(p.position.x, p.position.y, p.dot_radius, p.colors[p.cindex])

        motion();

        if (p.position.y > p.height - (p.dot_radius / 2)) {
            p.velocity.set(p.velocity.x, p.velocity.y * -1);
            changeColor();
        } if (p.position.x > (p.width - (p.dot_radius / 2)) || p.position.x < (0 + (p.dot_radius / 2))) {
            p.velocity.set(p.velocity.x * -1, p.velocity.y);
        }


    }

    function dot(x, y, radius, color) {
        p.fill(color);
        p.noStroke();
        //p.circle(x, y, radius);
        p.square(x,y,radius/2);
    }

    function motion() {
        p.position = p.position.add(p.velocity); // p.velocity
        p.velocity = p.velocity.add(p.acceleration); // acceleration

        // limiting vector magnitude
        p.velocity.limit(4);
    }

    function changeColor() {
        if (p.cindex < p.colors.length - 1) {
            p.cindex = p.cindex + 1;
        } else {
            p.cindex = 0;
        }
    }
}

let s1 = new p5(sketchTwo);


// this is for the atom animation
var sketchOne = function (p) {

    p.setup = function () {
        p.colors = ['#3498DB', '#16A085', '#F39C12', '#D35400', '#8E44AD'];
        p.container = document.getElementById('welcome-anim');
        p.canvas = p.createCanvas(220,220);
        p.canvas.parent(p.container);
        p.angle = 0;
        p.step = 0.1;
        p.positionDevider = 1;
        p.frameRate(60);
    }

    p.draw = function () {
        p.background(255);

        p.translate(p.width / 2, p.height / 2);

    
        p.fill('#616A6B');
        p.circle(0, 0, 30);
        

        p.noStroke();

        for (let i = 5; i < 10; i++) {
            p.fill(p.colors[i - 5]);
            p.rotate(p.radians(p.angle + p.step));
            p.circle(p.width / i, p.height / i, 15);
        }
        p.step = p.step + 1;
    }

}

let s2 = new p5(sketchOne);

