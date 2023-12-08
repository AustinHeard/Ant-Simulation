class Environment {
	constructor() {
		createCanvas(config.canvasSize, config.canvasSize);
	}

	/**
	 * Spawns the number of food passed in to the function
	 * @param {int} numberToSpawn
	 * @returns {Ant[]} Array of Food
	 */
	spawnFood(numberToSpawn) {
		return this.spawn(numberToSpawn ,"Food")
	}

	/**
	 * Spawns the number of ants passed in to the function
	 * @param {int} numberToSpawn
	 * @returns {Ant[]} Array of Ants
	 */
	spawnAnts(numberToSpawn) {
		return this.spawn(numberToSpawn ,"Ant")
	}

	/**
	 * Generic function to spawn entities
	 * @param {int} numberToSpawn
	 * @param {string} type Food | Ant
	 * @returns {Food[]|Ant[]} Array of Ants
	 */
	spawn(numberToSpawn, type) {

		let entityArray = [];

		for (let index = 0; index < numberToSpawn; index++) {
			if (type === "Food") {
				// TODO: spawn food clumpier
				// TODO: make it so that food can't spawn on top of a food that is already there
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
		var index = FoodList.indexOf(food)

		var x = FoodList.splice(index, 1)
		console.log("Food Deleted: ");
	}

}