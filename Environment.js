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
		let clumpArray = [];
		// TODO: get clumps per numberToSpawn equation right
		let clumps = 10;
		// let clumps = Math.round(numberToSpawn / (numberToSpawn * Math.random()));
		let foodPerClump = Math.round(numberToSpawn/clumps);

		console.log(clumps);

		// TODO: spawn both food and ants _ pixels from the edge of the canvas
		// TODO: make it so that food can't spawn on top of a food that is already there
		// TODO: make it so that clumps can't spawn on top of each other or to close to each other
		for (let i = 0; i < clumps; i++) {
      // Clamp clump position to a place far enough from the edge of the canvas where the whole clump will fit on the canvas
      var clumpPositionY = utility.clamp(
        utility.getRandomInt(0,height), config.clumpiness, height - config.clumpiness
      )
      var clumpPositionX = utility.clamp(
        utility.getRandomInt(0,width), config.clumpiness, width - config.clumpiness
      )

			clumpArray[i] = new Clump(clumpPositionX, clumpPositionY);

			for (let j = 0; j < foodPerClump; j++) {
        // Spawn food at a random location within the clump
        var angle = utility.getRandomInt(0, 360)

        var clumpFactorX = (Math.random() * clumpArray[i].clumpinessRadius) * sin(angle);
        var clumpFactorY = (Math.random() * clumpArray[i].clumpinessRadius) * cos(angle);

        var foodPositionX = clumpFactorX + clumpArray[i].location[0];
        var foodPositionY = clumpFactorY + clumpArray[i].location[1];

				clumpArray[i].foods.push(new Food(foodPositionX, foodPositionY));
			}
		}

		console.log(clumpArray);

		return clumpArray
	}

	/**
	 * Spawns the number of ants passed in to the function
	 * @param {int} numberToSpawn
	 * @returns {Ant[]} Array of Ants
	 */
	spawnAnts(numberToSpawn) {
		let AntArray = [];

    //TODO: spawn all of the ants in the same spot so the graph can be implemented
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