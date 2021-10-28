class Soldier {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var knight_features = { isStatic: false, restitution: 1, friction: 2 };
    this.knight = Bodies.rectangle(x, y, w, h, knight_features);
    World.add(world, this.knight);
    this.knightimg = loadImage("Medvialguy.png");
    this.visable = 255
  }

  display() {
    if (this.knight.speed > 10) {
      World.remove(world, this.knight)
      push()
      tint (255, this.visable)
      image(this.knightimg, this.knight.position.x, this.knight.position.y, this.w, this.h)

      this.visable -=2 
      pop()
    } else {
      var pos = this.knight.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.knight.angle);
      imageMode(CENTER);
      image(this.knightimg, 0, 0, this.w, this.h);
      pop();
    }
  }
}
