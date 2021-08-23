class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      //console.log(archerAngle);
  
      push();
     // Matter.Body.setStatic(this.body, false);
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    shoot(){
        var vel = p5.Vector.fromAngle(playerArcher.body.angle);
        vel.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x:vel.x, y:vel.y});
        //console.log(archerAngle);
        //console.log(this.body.angle);
        }
  }