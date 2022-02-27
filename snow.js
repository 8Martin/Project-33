class Snow {
  constructor(x, y,r) {

      var options ={
          restitution:0.4
      }
      this.r=r;
     // this.image = loadImage("snow.webp");
      this.body = Bodies.circle(x, y, this.r,options);       
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      push();
      fill("white")
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r,this.r);
     // image(this.image,pos.x, pos.y, 50, 50);
      pop();
  }

};