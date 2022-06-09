import { Vector2D } from "utils/vector";
import { Weather } from "weather/weather";
import "p5";

class Inventory {
  coins: number;
  guns;
}

export class Hero {
  isHoldingGun: boolean;
  position: Vector2D;
  speed: Vector2D = new Vector2D(0, 0);
  lookaheadRange: number;
  inventory: Inventory;

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
  }

    

  update(currentWeather: Weather) {
    /**
     * 1 -  update speed based on weather
     * correct speed based on pressed key
     * add speed to position
     */
    this.calculateSpeedBasedOnWeather(currentWeather);
    //this.calculateSpeedBasedOnKeyPressed();
    this.speed = new Vector2D(10,0)
    return this.speed;
  }

  calculateSpeedBasedOnWeather(currentWeather: Weather) {
    if (currentWeather.precipitation.isPresent() && this.speed.x !== 0) {
      this.speed = this.speed.add(new Vector2D(-1, 0));
    } else {
      this.speed = this.speed.add(new Vector2D(0, 0));
    }
  }

  calculateSpeedBasedOnKeyPressed() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.speed = new Vector2D(0, 0);
      this.speed = this.speed.add(new Vector2D(10, 0));
    } else if (keyIsDown(LEFT_ARROW)) {
      this.speed = new Vector2D(0, 0);
      this.speed = this.speed.add(new Vector2D(-10, 0));
    } else {
      this.speed = new Vector2D(0, 0);
    }
  }

  draw() {
    fill("orange");
    rect(this.position.x, this.position.y, 30, 30);
  }




  jumpOverObstacle(){
    const jumpSpeed = new Vector2D(0,10)
    const yBoundary = 300
    if( keyIsDown(32) ){
      this.position = this.position.sub(jumpSpeed) 
    
      if(this.position.y = yBoundary){
      this.position.y = yBoundary
    }
  }
    if((frameCount-4) % 20){
    }
    else{
      this.position.y = 350
    }
    }

  }
}
