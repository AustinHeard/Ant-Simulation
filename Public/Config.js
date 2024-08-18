import GraphNode from "./GraphNode.js";

export default class Config {
	constructor(p5) {
		this.diameter = 5;

		this.clumpiness = this.diameter * 12;
    this.clumpinessRadius = this.clumpiness /2;
    this.clumpPadding = this.clumpiness * (2/3);
    this.clumpArea = Math.ceil(p5.PI * (this.clumpinessRadius ** 2));
    this.foodPerClump = Math.ceil((this.clumpArea) / (this.diameter/1) / 10);

    // console.log("---- Config ----");
    // console.log("Diameter: " + this.diameter);
    // console.log("Clumpiness: " + this. clumpiness)
    // console.log("Clumpiness Radius: " + this.clumpinessRadius);
    // console.log("Clump Padding: " + this.clumpPadding);
    // console.log("Clump Area: " + this.clumpArea);
    // console.log("foodPerClump: " + this.foodPerClump);
    // console.log("----------------");

		this.numberOfAnts = 1;
		this.numberOfFood = 500;

		this.canvasSize = 900;
		this.frameRate = 60;
		this.backgroundColor = 150;

    // framecount % nodeRate = frequency of new nodes added to graph in seconds
    this.nodeRate = 60
    this.defaultEdgeWeight = 10

    this.originNode = new GraphNode(p5, 0, 860, 860)


    // Benchmark numbers
    // this.diameter = 1;
		// this.numberOfAnts = 2000;
		// this.numberOfFood = 2000;
	}
}