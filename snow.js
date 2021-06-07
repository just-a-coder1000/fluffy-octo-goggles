class Snow{

    constructor(x, y, w, h, r){

        var options = {

            isStatic : false, restitution : 1, friction : 1, density : 1

        }

        this.image = loadImage("snow4.webp");
        this.r = 10;
        this.x = x;
        this.y = y;
        this.h = 30;
        this.w = 30;
        this.body = Bodies.circle(x, y , w, h, r, options);
        World.add(world, this.body);   

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("red");
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.w, this.h);
        pop();

    }

}