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
		// TODO: Change this so that it can spawn clumps that don't have to have 50 food in it
		let clumps = Math.ceil(numberToSpawn / config.foodPerClump);

		console.log("Number of Clumps:  " + clumps);

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

			for (let j = 0; j < config.foodPerClump; j++) {
        // Spawn food at a random location within the clump
        var randAngle = utility.getRandomInt(0, 360);

        var clumpFactorX = (Math.random() * clumpArray[i].clumpinessRadius) * sin(randAngle);
        var clumpFactorY = (Math.random() * clumpArray[i].clumpinessRadius) * cos(randAngle);

        var foodPositionX = clumpFactorX + clumpArray[i].location[0];
        var foodPositionY = clumpFactorY + clumpArray[i].location[1];

        // Make sure that the food isn't overlapping in the clump
        var foodPosition = [foodPositionX, foodPositionY]
        var overlapping = false;

        for (let k = 0; k < clumpArray[i].foods.length; k++) {
          if (utility.dist(clumpArray[i].foods[k].location, foodPosition) < config.diameter) {
            console.log('CRICLES ARE OVERLAPPING!!!');
            overlapping = true;
          }
        }

        if (!overlapping) {
          clumpArray[i].foods.push(new Food(foodPositionX, foodPositionY));
        } else {
          // if food is overlapping try to make that food again until it is not overlapping another food
          j--;
        }
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