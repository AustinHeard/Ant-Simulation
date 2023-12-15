class Config {
	constructor() {
		this.diameter = 5;

		this.clumpiness = 60;
    this.clumpPadding = 150;
    this.foodPerClump = 50;

		/**
		 * Ants - 500
		 * Food - 500
		 * 9 FPS before food clumping
		 */
    // Benchmark numbers
		// this.numberOfAnts = 500;
		// this.numberOfFood = 500;
		this.numberOfAnts = 20;
		this.numberOfFood = 500;

		this.canvasSize = 900;
		this.frameRate = 60;
		this.backgroundColor = 150;
	}
}