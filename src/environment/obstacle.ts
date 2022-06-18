import { Vector2D } from "../utils/vector";

export class Obstacle {
  public position: Vector2D;
  constructor(x, y, public sizeX, public sizeY) {
    this.position = new Vector2D(x, y);
  }
  draw() {
    fill(225);
    rect(this.position.x, this.position.y, this.sizeX, this.sizeY);
  }
  update(heroSpeed: Vector2D) {
    this.position = this.position.add(heroSpeed.reverseX());
  }
}
