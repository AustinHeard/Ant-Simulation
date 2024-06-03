import Config from "./Config.js";

export default class Food {
	/**
	 * Creates an food
	 * @param {int} x x location put food
	 * @param {int} y y location put food
	 */
	constructor(p5, x, y) {
		this.p5 = p5;
		this.config = new Config(p5);
		this.diameter = this.config.diameter;
		this.radius = this.diameter / 2;

		this.location = [x,y];
	}

	/**
	 * Displays the Food on the screen
	 */
	show() {
		this.p5.fill(128,30,40);
		this.p5.circle(this.location[0], this.location[1], this.diameter);
	}
}