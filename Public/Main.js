import Graph from './Graph.js';
import Config from './Config.js';
import Environment from './Environment.js';
import Utility from './Utility.js';

let Ants, ClumpList, utility, environment, config, graph;


new p5(function(p5) {
	p5.setup = function() {
		graph = new Graph();
		utility = new Utility(p5);
		environment = new Environment(p5);
		config = new Config(p5);
		ClumpList = environment.spawnFood(config.numberOfFood);
		Ants = environment.spawnAnts(config.numberOfAnts);

	}

	// TODO: Start trying to implement graph stuff

	p5.draw = function() {
		p5.background(config.backgroundColor);

		Ants.forEach(ant => {
			ant.wander();
			ant.keepOnMap();
			ant.senseFood(ClumpList);
			ant.show();
		});

		ClumpList.forEach(clump => {
			for (let index = 0; index < clump.length; index++) {
				let food = clump[index];
				food.show();
			}
			clump.show();
		})


		utility.showFrameRate();
		utility.showNumberAnts(Ants);
		utility.showNumberClumps(ClumpList);
		utility.showNumberFood(ClumpList);
	}
});