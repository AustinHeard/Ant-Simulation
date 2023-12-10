class Environment {
	constructor() {
		createCanvas(config.canvasSize, config.canvasSize);
		frameRate(config.frameRate);
	}

	/**
	 * Spawns the number of food passed in to the function
	 * @param {int} numberToSpawn
	 * @returns {Clump[][]} Array of Clumps full of food
	 */
	spawnFood(numberToSpawn) {
		let FoodArray = [];
		let clumps = numberToSpawn * Math.random();
		let foodPerClump = Math.round(numberToSpawn/clumps);

		// TODO: spawn both food and ants _ pixels from the edge of the canvas
		// TODO: make it so that food can't spawn on top of a food that is already there
		// TODO: make it so that clumps can't spawn on top of each other or to close to each other
		for (let i = 0; i < clumps; i++) {
			FoodArray[i] = new Clump(Math.random()*width, Math.random()*height);
			for (let j = 0; j < foodPerClump; j++) {
				FoodArray[i].foods.push(new Food(utility.getRandomInt(FoodArray[i].location[0] - FoodArray[i].clumpinessRadius, FoodArray[i].location[0] + FoodArray[i].clumpinessRadius), utility.getRandomInt(FoodArray[i].location[1] - FoodArray[i].clumpinessRadius, FoodArray[i].location[1] + FoodArray[i].clumpinessRadius)))
			}
			// FoodArray[index] = new Food(Math.random()*width, Math.random()*height)
		}
		return FoodArray
	}

	/**
	 * Spawns the number of ants passed in to the function
	 * @param {int} numberToSpawn
	 * @returns {Ant[]} Array of Ants
	 */
	spawnAnts(numberToSpawn) {
		let AntArray = [];

		// TODO: spawn both food and ants _ pixels from the edge of the canvas
		for (let index = 0; index < numberToSpawn; index++) {
			AntArray[index] = new Ant(Math.random()*width, Math.random()*height)
		}

		return AntArray
	}

	/**
	 * @deprecated
	 * Generic function to spawn entities
	 * @param {int} numberToSpawn
	 * @param {string} type Food | Ant
	 * @returns {Food[]|Ant[]} Array of Ants
	 */
	spawn(numberToSpawn, type) {
		let entityArray = [];

		for (let index = 0; index < numberToSpawn; index++) {
			if (type === "Food") {
				entityArray[index] = new Food(Math.random()*width, Math.random()*height)
			} else if (type === "Ant") {
				entityArray[index] = new Ant(Math.random()*width, Math.random()*height)
			}
		}

		return entityArray
	}

	/**
	 * Removes passed food from the FoodList
	 * @param {Food} food
	 */
	removeFood(food) {
		ClumpList.forEach(Clump => {
			var index = Clump.foods.indexOf(food)
			if (index != -1){
				var x = Clump.foods.splice(index, 1)
			}
		})
	}
}