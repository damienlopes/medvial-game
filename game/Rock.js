class Rock {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var bird_features = { isStatic: false, restitution: 1, friction: 2 };
    this.rockp = Bodies.rectangle(x, y, w, h, bird_features);
    World.add(world, this.rockp);
    this.rockimg = loadImage("bolder.png");
    this.smokeimg = loadImage("assets/smoke.png");
 
  }

  display() {
    var pos = this.rockp.position;
    //this.bird.position.x = mouseX
    //this.bird.position.y = mouseY
    push();
    translate(pos.x, pos.y);
    rotate(this.rockp.angle);
    imageMode(CENTER);
    image(this.rockimg, 0, 0, this.w, this.h);
    pop();
  }
}
