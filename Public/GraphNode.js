export default class GraphNode {
	constructor(p5, NodeNumber, locationX, locationY) {
		this.p5 = p5


		this.NodeNumber = NodeNumber;
		// this.location = [x,y]
		this.location = [locationX,locationY];


		// p5 stuff
		this.diameter = 2
	}

	show() {
		this.p5.fill(20);
		this.p5.circle(this.location[0], this.location[1], this.diameter);
	}

	/**
	 * TODO:
	 *
	 * function show()
	 * 	- draw the node as a circle at the location stored in the node
	 *  -
	 * function move(direction)
	 *  - move the node in direction to move it away from other nodes
	 *
	 */

}