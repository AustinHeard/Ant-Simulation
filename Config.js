class Config {
	constructor() {
		this.diameter = 5;

		this.clumpiness = this.diameter * 12;
    this.clumpinessRadius = this.clumpiness /2;
    this.clumpPadding = this.clumpiness * (2/3);
    this.clumpArea = Math.ceil(PI * (this.clumpinessRadius ** 2));
    this.foodPerClump = Math.ceil((this.clumpArea) / (this.diameter/1) / 10);

    console.log("---- Config ----");
    console.log("Diameter: " + this.diameter);
    console.log("Clumpiness: " + this. clumpiness)
    console.log("Clumpiness Radius: " + this.clumpinessRadius);
    console.log("Clump Padding: " + this.clumpPadding);
    console.log("Clump Area: " + this.clumpArea);
    console.log("foodPerClump: " + this.foodPerClump);
    console.log("----------------");

		this.numberOfAnts = 20;
		this.numberOfFood = 500;

		this.canvasSize = 900;
		this.frameRate = 60;
		this.backgroundColor = 150;


    // Benchmark numbers
    // this.diameter = 1;
		// this.numberOfAnts = 2000;
		// this.numberOfFood = 2000;
	}
}