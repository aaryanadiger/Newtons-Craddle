class Rope {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    display(){
        var pA = this.body.bodyA.position;
        var pB = this.body.bodyB.position;

        strokeWeight(2);

        var anchor1X = pA.x;
        var anchor1Y = pA.y;

        var anchor2X = pB.x + this.offsetX;
        var anchor2Y = pB.y + this.offsetY;


        line(anchor1X,anchor1Y,anchor2X,anchor2Y);

    }
} 