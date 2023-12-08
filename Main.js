let Ants, FoodList, utility, environment, config;

/**
 * TODO: add config function or class
 */
let numberOfFood = 20
let numberOfAnts = 10

function setup() {
	config = new Config();
	utility = new Utility();
	environment = new Environment();
	FoodList = environment.spawnFood(config.numberOfFood);
	Ants = environment.spawnAnts(config.numberOfAnts );
}

function draw() {
	background(150);


	Ants.forEach(ant => {
		ant.wander();
		ant.keepOnMap();
		ant.senseFood();
		ant.show();
	});

	FoodList.forEach(food => {
		food.show();
	})


	utility.showFrameRate();
}

function keyPressed() {
	Ants[0].eatFood(FoodList[0])
}