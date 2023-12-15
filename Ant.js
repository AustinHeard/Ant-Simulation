class Ant {
	/**
	 * Creates an ant
	 * @param {int} x x location start ant at
	 * @param {int} y y location start ant at
	 */
	constructor(x, y) {
		this.diameter = config.diameter;
		this.radius = this.diameter / 2;

		this.sightDiameter = this.diameter * 3
		this.sightRadius = this.sightDiameter / 2

		this.location = [x,y]
		/**
		 * 1|2
		 *
		 * 3|4
		 *
		 * movement in direction 1 is:
		 * 		X: -1 Y: -1
		 *
		 * movement in direction 2 is:
		 * 		X: 1  Y: -1
		 *
		 * movement in direction 3 is:
		 * 		X: -1 Y: 1
		 *
		 * movement in direction 4 is:
		 * 		X: 1  Y: 1
		 *
		 * X|UP  |X
		 *
		 * LEFT|X   |RIGHT
		 *
		 * X|DOWN|X
		 *
		 * movement in direction UP is:
		 * 		X: 0 Y: -1
		 *
		 * movement in direction LEFT is:
		 * 		X: -1  Y: 0
		 *
		 * movement in direction RIGHT is:
		 * 		X: 1 Y: 0
		 *
		 * movement in direction DOWN is:
		 * 		X: 0  Y: 1
		 *
		 */
		this.direction = [0,0];

		this.movementSpeed = this.diameter / 20;
		// this.movementSpeed = 2;

		this.steps = 0;
		this.wanderTime = 1;
		this.wanderability = .50;

		this.UP = [0,-1];
		this.LEFT = [-1,0];
		this.RIGHT = [1,0];
		this.DOWN = [0,1];

		this.UP_LEFT = [-1,-1];
		this.UP_RIGHT = [1,-1];
		this.DOWN_LEFT = [-1,1];
		this.DOWN_RIGHT = [1,1];
	}

	/**
	 * Displays the Ant on the screen
	 */
	show() {
		fill(20);
		circle(this.location[0], this.location[1], this.diameter);
	}

	/**
	 * Moves the ant to the x and y cords
	 * @param {int} x x location to move the ant to
	 * @param {int} y y location to move the ant to
	 */
	move(x, y) {
		this.location[0] = x;
		this.location[1] = y;
	}

	/**
	 * Returns the x,y location of the Ant
	 * @returns {int[]} (x,y)
	 */
	getLocation() {
		return [this.x,this.location[1]];
	}

	/**
	 * Makes ant follow the mouse cursor
	 */
	followMouse() {
		let currentLocation = this.getLocation();
		let mouseLocation = [mouseX,mouseY];

		this.direction = [Math.sign(currentLocation[0] - mouseLocation[0]) * -1, Math.sign(currentLocation[1] - mouseLocation[1]) * -1];

		this.move(this.location[0] += this.direction[0] * this.movementSpeed, this.location[1] += this.direction[1] * this.movementSpeed)
	}

	/**
	 * Makes the ant wander around and try and find food
	 */
	wander() {

		if (Math.random() <= this.wanderability && this.steps >= this.wanderTime * 60) {
			this.steps = 0
			let random = Math.random()
			if (random <= .125) {
				this.direction = this.UP
			} else if (random > .125 && random <= .25) {
				this.direction = this.DOWN
			} else if (random > .25 && random <= .375) {
				this.direction = this.LEFT
			} else if (random > .375 && random <= .5) {
				this.direction = this.RIGHT
			} else if (random > .5 && random <= .625) {
				this.direction = this.UP_LEFT
			} else if (random > .625 && random <= .75) {
				this.direction = this.UP_RIGHT
			} else if (random > .75 && random <= .875) {
				this.direction = this.DOWN_LEFT
			} else if (random > .875 && random <= 1) {
				this.direction = this.DOWN_RIGHT
			}
		}
		this.steps += 1
		this.move(this.location[0] += this.direction[0] * this.movementSpeed, this.location[1] += this.direction[1] * this.movementSpeed)

	}

	/**
	 * Keeps the ant from wandering off of the canvas
	 */
	keepOnMap() {
		this.padding = this.diameter / 2 + 5
		if (this.location[0] >= width - this.padding) {
			this.direction = this.LEFT
		} else if (this.location[0] <= 0 + this.padding) {
			this.direction = this.RIGHT
		} else if (this.location[1] >= height - this.padding) {
			this.direction = this.UP
		} else if (this.location[1] <= 0 + this.padding) {
			this.direction = this.DOWN
		}

		this.move(this.location[0] += this.direction[0] * this.movementSpeed, this.location[1] += this.direction[1] * this.movementSpeed)
	}

	/**
	 * Makes the ant eat a piece of food
	 * @param {Food} food
	 */
	eatFood(food) {
		environment.removeFood(food);
		// console.log("Food Eaten: ");

	}

	/**
	 * Makes the ant check if there is food in its vision circle
	 */
	senseFood() {
		fill(128)
		circle(this.location[0], this.location[1], this.sightDiameter)

		// TODO: Walk to food before eating it
		// TODO: Return home on weighted graph of pheromones

		// TODO: Implement clump pruning
		// With clumpy food, I can prune clumps and won't have to loop through every food. Should be faster ?
		ClumpList.forEach(Clump => {
      if (utility.dist(Clump.location, this.location) < (config.clumpiness + config.clumpPadding)) {
        Clump.foods.forEach(food => {
          if (utility.dist(food.location, this.location) < this.sightRadius + food.radius) {
            this.eatFood(food);
          }
        })
      }
    });
	}

	/**
	 * Makes the ant lay pheromones as it walks
	 */
	layPheromones() {
		// TODO: every ant should always be laying pheromones behind it. The ant should weigh the paths with more pheromones on them higher when trying to search for food

	}

	/**
	 * Makes it so that two ants can't be on top of each other
	 */
	avoidAnts() {
		// TODO: Make it so that the ants don't crash into each other
	}
}