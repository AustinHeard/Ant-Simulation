import Config from "./Config.js";
import Utility from "./Utility.js";
import Clump from "./Clump.js";
import Food from "./Food.js";
import Ant from "./Ant.js";
import GraphNode from "./GraphNode.js";


export default class Environment {
	constructor(p5) {
		this.p5 = p5
		this.config = new Config(p5);
		this.utility = new Utility(p5);
		p5.createCanvas(this.config.canvasSize, this.config.canvasSize);
		p5.frameRate(this.config.frameRate);
	}

	/**
	 * Spawns the number of food passed in to the function
	 * @param {int} numberToSpawn
	 * @returns {Clump[][]} Array of Clumps full of food
	 */
	spawnFood(numberToSpawn) {

    // TODO: Maybe rewrite the spawn clumps part of the function into its own function for readability

		let clumpArray = [];
		// TODO: Change this so that it can spawn clumps that don't have to have 50 food in it
		let clumps = Math.ceil(numberToSpawn / this.config.foodPerClump);

		console.log("Number of Clumps:  " + clumps);

		for (let i = 0; i < clumps; i++) {
      // Clamp clump position to a place far enough from the edge of the canvas where the whole clump will fit on the canvas
      var clumpPositionY = this.utility.clamp(
        this.utility.getRandomInt(0,this.p5.height), this.config.clumpiness, this.p5.height - this.config.clumpiness
      )
      var clumpPositionX = this.utility.clamp(
        this.utility.getRandomInt(0,this.p5.width), this.config.clumpiness, this.p5.width - this.config.clumpiness
      )

      // Make sure that clumps aren't overlapping
      var newClumpPosition = [clumpPositionX, clumpPositionY]

      if (!this.utility.overlapping(clumpArray, newClumpPosition, this.config.clumpiness + this.config.clumpPadding)) {
        clumpArray[i] = new Clump(this.p5, clumpPositionX, clumpPositionY);
      } else {
        // if Clump is overlapping try to make that Clump again until it is not overlapping any other Clumps
        console.log('CLUMPS ARE OVERLAPPING!!!');
        i--;
        continue
      }

			for (let j = 0; j < this.config.foodPerClump; j++) {
        // Spawn food at a random location within the clump
        var randAngle = this.utility.getRandomInt(0, 360);

        var clumpFactorX = (Math.random() * this.config.clumpinessRadius) * this.p5.sin(randAngle);
        var clumpFactorY = (Math.random() * this.config.clumpinessRadius) * this.p5.cos(randAngle);

        var foodPositionX = clumpFactorX + clumpArray[i].location[0];
        var foodPositionY = clumpFactorY + clumpArray[i].location[1];

        // Make sure that the food isn't overlapping in the clump
        var foodPosition = [foodPositionX, foodPositionY]

        if (!this.utility.overlapping(clumpArray[i].foods, foodPosition, this.config.diameter)) {
          clumpArray[i].foods.push(new Food(this.p5, foodPositionX, foodPositionY));
        } else {
          // if two food are overlapping try to make that food again until it is not overlapping another food
          console.log('FOOD IS OVERLAPPING!!!');
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
		// let originNode = new GraphNode(this.p5, 0, this.p5.width - this.config.clumpPadding, this.p5.height - this.config.clumpPadding)

    //TODO: spawn all of the ants in the same spot so the graph can be implemented
		for (let index = 0; index < numberToSpawn; index++) {
			AntArray[index] = new Ant(this.p5, this.p5.width - this.config.clumpPadding, this.p5.height - this.config.clumpPadding, this.config.originNode)
			// AntArray[index] = new Ant(width/2, height/2)
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
				entityArray[index] = new Food(Math.random()*this.p5.width, Math.random()*this.p5.height)
			} else if (type === "Ant") {
				entityArray[index] = new Ant(Math.random()*this.p5.width, Math.random()*this.p5.height)
			}
		}

		return entityArray
	}

	/**
	 * Removes passed food from the FoodList
	 * @param {Food} food
	 */
	removeFood(ClumpList, food) {
		ClumpList.forEach(Clump => {
			var index = Clump.foods.indexOf(food)
			if (index != -1){
				var x = Clump.foods.splice(index, 1)
			}
		})
	}
}