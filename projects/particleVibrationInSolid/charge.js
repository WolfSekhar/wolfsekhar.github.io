class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.vector = createVector(this.x,this.y);
    }
    display(){
        fill('red');
        stroke(1);
        circle(this.x,this.y,20);
    }

    update(x,y){
        this.x = x;
        this.y = y;
    }

    getVector(){
        this.vector.set(this.x,this.y);
        return this.vector;
    }

    
}