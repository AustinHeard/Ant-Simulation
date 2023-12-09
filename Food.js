class Food {
	/**
	 * Creates an food
	 * @param {int} x x location put food
	 * @param {int} y y location put food
	 */
	constructor(x, y) {
		this.diameter = config.diameter;
		this.radius = this.diameter / 2;

		this.location = [x,y];
	}

	/**
	 * Displays the Food on the screen
	 */
	show() {
		fill(128,30,40);
		circle(this.location[0], this.location[1], this.diameter);
	}
}