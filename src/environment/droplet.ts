import "p5";
import { Vector2D } from "../utils/vector";
import { Hero } from "../hero/hero"
/**
 * TODO-1: think about how to destroy an object when
 * it reaches end of the canvas.
 */

export class Droplet {
  private position: Vector2D;

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
  }
  public hero: Hero

  public get x() {
    return this.position.x;
  }

  public get y() {
    return this.position.y;
  }
  public move(direction: Vector2D) {
    this.position = this.position.add(direction);
  }
  public update(heroSpeed: Vector2D){
    this.position = this.position.add(heroSpeed.reverseX())
  }
  public draw() {
    stroke("blue");
    line(this.x, this.y, this.x, this.y + 1);
  }
}
