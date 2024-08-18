import GraphNode from './GraphNode.js';
import LinkedList from './LinkedList.js';
import ListNode from './ListNode.js';
import Config from './Config.js';

export default class Graph {
	constructor(p5){

		this.p5 = p5
		this.config = new Config(p5)
		// Dictionary with nodes as keys and
		// values as linked list of its neighbors
		// listNode storing neighbor NodeNumber and edgeWeight
		this.AdjacencyList = new Map();


		// List of Nodes
		this.NodeList = []

		this.originNode = this.config.originNode

		this.NodeList.push(this.originNode)

		// Test Node code BROKEN no Location data
		// for (let i = 0; i < 15; i++) {
		// 	let temp = new GraphNode(i, x, y);
		// 	this.NodeArray[i] = temp;
		// }
		// console.log(this.NodeArray);
	}

	addNode(newNode, lastNode) {

		// TODO: this is going to really hurt performance the longer the sim runs
		// this.NodeList.forEach( node => {
			// if newNode.nodeNumber == node.nodeNumber
			// yes - don't add newNode print error

			// if newNode.location == node.location
			// yes - update weight and don't add newNode
				// newNode = node at location
				// if returning with food
					// updateWeight(uppies, newNode, lastNode)
				// if returning no food
					// updateWeight(downies, newNode, lastNode)
		// })


		this.addToAdjacencyList(newNode, lastNode)
		this.NodeList.push(newNode)
		console.log(this.AdjacencyList);
		console.log(this.NodeList)
	}

	addToAdjacencyList(newNode, lastNode) {
		// create new linkedlist with newNode as head
		let newListNode = new ListNode(this.config.defaultEdgeWeight)
		let newLList = new LinkedList()
		// add newNode to AdjacencyList
		this.AdjacencyList.set(newNode, newLList)
		// key newNode, Value new linkedlist
		newLList.head = newListNode
		newListNode.next = lastNode

		// isNeighbors, NeighborsList = searchForNeighbors()
		// if isNeighbors
			// add neighbors to AdjacencyList
			// add newNode to neighbors AdjacencyList linkedlist
	}

	searchForNeighbors() {
		// Search NodeList for nodes in "Search Radius (config.searchRadius)"
		// return [isNeighbors, NeighborsList]
	}

	updateWeight(weightChange, newNode, lastNode) {
		// search newNode's linked list in AdjacencyList for lastNode and
		// change its weight by weightChange
	}

	show() {

		this.NodeList.forEach( node => {
			node.show()
		})

		this.drawEdges()
	}

	drawEdges() {
		/**
		 * TODO:
		 * Going to have a lot of edges drawn twice will need to
		 * figure out how to not do that and draw faster
		 */

		for (const [Node, NeighborLinkedList] of this.AdjacencyList.entries()){
			// draw edges from Node to Neighbors
			let current = NeighborLinkedList.head
			while (current) {
				let next = current.next

				if (!next) {
					break
				}

				// if (this.p5.frameCount % this.config.nodeRate == 0) {
				// 	console.log('ahhhhhhhhh');
				// }
				// this.p5.strokeWeight(current.weight);

				this.p5.line(Node.location[0], Node.location[1], next.location[0], next.location[1]);
				current = current.next
			}
		}

	}
}