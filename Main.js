let Ants, ClumpList, utility, environment, config;


function setup() {
	config = new Config();
	utility = new Utility();
	environment = new Environment();
	ClumpList = environment.spawnFood(config.numberOfFood);
	Ants = environment.spawnAnts(config.numberOfAnts);
}

function draw() {
	background(config.backgroundColor);

	// TODO: Sense food is tanking performance
	Ants.forEach(ant => {
		ant.wander();
		ant.keepOnMap();
		ant.senseFood();
		ant.show();
	});
	// console.log(ClumpList);
	ClumpList.forEach(clump => {
		// console.log(clump);
		for (let index = 0; index < clump.length; index++) {
			console.log(clump);
			let food = clump[index];
			console.log(food);
			food.show();
		}
		clump.show();
	})


	utility.showFrameRate();
	utility.showNumberAnts();
	utility.showNumberClumps();
}

function keyPressed() {
	Ants[0].eatFood(ClumpList[0])
}