let Ants, ClumpList, utility, environment, config;


function setup() {
	config = new Config();
	utility = new Utility();
	environment = new Environment();
	ClumpList = environment.spawnFood(config.numberOfFood);
	Ants = environment.spawnAnts(config.numberOfAnts);
}

// TODO: Start trying to implement graph stuff


function draw() {
	background(config.backgroundColor);

	Ants.forEach(ant => {
		ant.wander();
		ant.keepOnMap();
		ant.senseFood();
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
	utility.showNumberAnts();
	utility.showNumberClumps();
	utility.showNumberFood();
}

function keyPressed() {
	Ants[0].eatFood(ClumpList[0])
}