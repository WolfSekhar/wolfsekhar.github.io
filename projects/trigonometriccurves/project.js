/*
 MyCanvas Class
 setCanvas() -> user function to prepare the div and canvas for drawing purpose in the DOM
*/
class MyCanvas {
    setCanvas(containerElement, processing) {
        let animationContainer;
        let animationContainerX, animationContainerY;
        try {
        animationContainer = document.getElementById(containerElement);
        animationContainerX = animationContainer.offsetWidth;
        animationContainerY = animationContainer.offsetHeight;
        processing.createCanvas(animationContainerX, animationContainerY).parent(animationContainer);
        animationContainer.style.flex = 'none';
        animationContainer.style.height = animationContainerY;
        animationContainer.style.width = animationContainerX;
        } catch (error) {
           console.log(error); 
        }
        
    }
}



/************************************************************************************************************/
function animationSketch(processing) {

    // write logic below
    processing.setup = function () {
        new MyCanvas().setCanvas('project-animation-div', processing);
        
       
        processing.background(255);
    }
    let x = 0;
    let ylimiter=0;
    processing.draw = function () {
        processing.fill(0);
        processing.stroke(0);
        processing.translate(0,150);
        processing.line(0,0,processing.width,0);
        processing.circle(x,-75 *processing.sin(x *3),7);

        processing.fill('green');
        processing.stroke('green');
        processing.translate(0,200);
        processing.line(0,0,processing.width,0);
        processing.circle(x,-75 *processing.cos(x *3),7);


        processing.fill('red');
        processing.stroke('red');
        processing.translate(0,200);
        processing.line(0,0,processing.width,0);
        ylimiter = 75 *processing.tan(x *3);
        if(ylimiter<100 && ylimiter>-100){
            processing.circle(x,-ylimiter,7);
        }
        
        x+=0.5;
        if(x>processing.width){
            x = 0;
            processing.background(255);
        }

    }

}

/************************************************************************************************************/


function graphSketch(processing) {

    // write logic below
    processing.setup = function () {
        new MyCanvas().setCanvas('project-graph-div', processing);
        processing.background('#F6F5F0');
    }

    processing.draw = function () {
        processing.background('beige');
        processing.text('Graph', processing.width / 2, processing.height / 2);

        // Write code here
    }
}


/************************************************************************************************************/

function controlSketch(processing) {


    // write logic below
    processing.setup = function () {
        new MyCanvas().setCanvas('project-controls-div', processing);
        processing.background('beige');
    }

    processing.draw = function () {
        processing.background('green');
        processing.text('Control', processing.width / 2, processing.height / 2);


    }
}
/************************************************************************************************************/

new p5(animationSketch);
// new p5(graphSketch);
// new p5(controlSketch);

