class Config {
	constructor() {
		this.diameter = 5;
		this.clumpiness = 100;

		/**
		 * Ants - 500
		 * Food - 500
		 * 9 FPS before food clumping
		 */
		// this.numberOfAnts = 40;
		this.numberOfAnts = 100;
		// this.numberOfFood = 400;
		this.numberOfFood = 600;

		this.canvasSize = 900;
		this.frameRate = 60;
		this.backgroundColor = 150;
	}
}