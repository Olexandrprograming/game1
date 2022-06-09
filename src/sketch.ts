import "p5";
import { Environemnt } from "environment/environment";
import { WeatherProvider } from "weather/weatherProvider";
import { Hero } from "hero/hero";
import { Cloud } from "environment/cloud";

const environment = new Environemnt();
const weatherProvider = new WeatherProvider();
const hero = new Hero(200, 350);
const cloud = new Cloud(200, 200);

function setup() {
  frameRate(10);
  createCanvas(Environemnt.worldSizeX, Environemnt.worldSizeY);
}

function draw() {
  background(200);
  const currentWeather = weatherProvider.getCurrentWeather();
  const heroSpeed = hero.update(currentWeather);
  environment.update(currentWeather, heroSpeed);
  environment.draw();
  hero.update(currentWeather);
  cloud.update(currentWeather.wind, currentWeather.precipitation, heroSpeed);
  hero.jumpOverObstacle()
  hero.draw();
}

// It will be explained later.
export { setup, draw };
