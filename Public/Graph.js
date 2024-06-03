import Node from './Node.js';

export default class Graph {
	constructor(){
		this.NodeArray = []
		for (let i = 0; i < 15; i++) {
			let temp = new Node(i);
			this.NodeArray[i] = temp;
		}
		console.log(this.NodeArray);
	}
}