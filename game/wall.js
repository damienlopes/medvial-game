class wallnot {
  constructor(x, y, w, h, a) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    var wall_features = { isStatic: false, restitution: 1, friction: 2 };
    this.wall = Bodies.rectangle(x, y, w, h, wall_features);
    Matter.Body.setAngle(this.wall, a);
    World.add(world, this.wall);
    this.wallimg = loadImage("Stonewall.png");
  }

  display() {
    var pos = this.wall.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.wall.angle);
    imageMode(CENTER);
    image(this.wallimg, 0, 0, this.w, this.h);
    pop();
  }
}
