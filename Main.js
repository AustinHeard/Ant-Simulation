let Ants, FoodList, utility, environment, config;


function setup() {
	config = new Config();
	utility = new Utility();
	environment = new Environment();
	FoodList = environment.spawnFood(config.numberOfFood);
	Ants = environment.spawnAnts(config.numberOfAnts );
}

function draw() {
	background(config.backgroundColor);


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