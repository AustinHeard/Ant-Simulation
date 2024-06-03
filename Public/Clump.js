import Config from "./Config.js";

export default class Clump {
	constructor(p5, x, y) {
		this.p5 = p5
		this.config = new Config(p5);
		this.clumpiness = this.config.clumpiness;
		this.clumpinessRadius = this.clumpiness / 2;

		this.location = [x,y];
		this.foods = []
	}

	show() {
		this.foods.forEach(food => {
			food.show()
		})
	}
}