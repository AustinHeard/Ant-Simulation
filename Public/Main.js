import Graph from './Graph.js';
import Config from './Config.js';
import Environment from './Environment.js';
import Utility from './Utility.js';

let utility, environment, config, graph, Ants;

let NodeNumber = 0

new p5(function(p5) {
	p5.setup = function() {
		graph = new Graph(p5);
		utility = new Utility(p5);
		environment = new Environment(p5);
		config = new Config(p5);
		Ants = environment.spawnAnts(config.numberOfAnts);
	}

	// TODO: Start trying to implement graph stuff

	p5.draw = function() {
		p5.background(config.backgroundColor);

		Ants.forEach(ant => {
			if (p5.frameCount % config.nodeRate == 0) {
				ant.addNode(graph, NodeNumber)
				NodeNumber = NodeNumber + 1
			}
			ant.wander();
			ant.keepOnMap();
			ant.show();
		});

		graph.show()

		utility.showFrameRate();
	}
});