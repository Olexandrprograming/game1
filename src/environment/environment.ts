import { Vector2D } from "utils/vector";
import { Sky } from "./sky";
import { Ground } from "./ground";
import { Weather } from "weather/weather";
import { Obstacle } from "environment/obstacle";
import { Hero } from "hero/hero";

export class Environemnt {
  public static gravity: Vector2D = new Vector2D(0, 1);
  public static worldSize: [number, number] = [400, 400];
  private sky: Sky;
  private ground: Ground;

  public obstacle: Obstacle[] = [];
  public hero: Hero;

  constructor() {
    this.sky = new Sky(Environemnt.worldSizeY * 0.8);
    this.ground = new Ground(Environemnt.worldSizeY - this.sky.height);
  }

  public static get worldSizeX() {
    return this.worldSize[0];
  }
  public static get worldSizeY() {
    return this.worldSize[1];
  }

  public update(currentWeather: Weather, heroSpeed: Vector2D) {
    this.sky.update(currentWeather, heroSpeed);
    this.ground.update(currentWeather, heroSpeed);
    this.obstacle.forEach((obstacle) => obstacle.update(heroSpeed));

   if (frameCount % 20) {
  } else {
      this.addObstacle();
   }
  }

  private addObstacle() {
    this.obstacle.push(
      new Obstacle(
        Environemnt.worldSizeX,
        0.95 * Environemnt.worldSizeY - Math.random() * 30,
        20,
        100
      )
    );
  }
  public draw() {
    this.sky.draw();
    this.ground.draw();
    this.obstacle.forEach((obstacle) => obstacle.draw());
  }
}
