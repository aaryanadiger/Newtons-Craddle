class Bob {
    constructor (x,y,radii){
      var options = {
           isStatic:false,
          'restitution':1.2,
          'friction':0.4,
          'density':3
      }
      this.body = Bodies.circle(x,y,radii/2,options);
      this.radii = radii;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("pink");
      ellipseMode(CENTER);
      ellipse(0,0,this.radii,this.radii)
      pop();
    }
  };