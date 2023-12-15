class Utility {

	/**
	 * Shows the frame rate in the top right corner of the screen
	 */
	showFrameRate() {
    //TODO: only update framerate every couple or frames or every second
		let fps = frameRate();
		fill(256)
		textSize(20);
		text("FPS: "+round(fps), width - 110, 50);
	}

	/**
	 * Show number of Clumps in the top right corner
	 */
	showNumberClumps() {
		fill(256);
		textSize(20);
		text("Number of Clumps: "+ ClumpList.length, width - 210, 100);
	}

	/**
	 * Show number of Ants in the top right corner
	 */
	showNumberAnts() {
		fill(256);
		textSize(20);
		text("Number of Ants: "+ Ants.length, width - 210, 75);
	}

  /**
   * Shows the number of Food in the top right corner
   */
  showNumberFood() {
    var foodNumber = 0;
    ClumpList.forEach(clump => {
      foodNumber += clump.foods.length
    });
		fill(256);
		textSize(20);
		text("Number of Food: "+ foodNumber, width - 210, 125);
  }

	/**
	 * Get Random number between min and max inclusive
	 * @param {number} min
	 * @param {number} max
	 */
	getRandomInRange(min, max) {
		return Math.random() * (max - min + 1) + min;
	}

	/**
	 * Get Random Int between min and max inclusive
	 * @param {number} min
	 * @param {number} max
	 */
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 * Clamp a number between the min and max
	 * @param {number} num
	 * @param {number} min
	 * @param {number} max
	 */
	clamp(num, min, max) {
		return Math.min(Math.max(num, min), max);
	}

  /**
   * Gets the distance between to two objects
   * @param {array} arr1
   * @param {array} arr2
   * @returns
   */
  dist(arr1, arr2) {
    return dist(arr1[0], arr1[1], arr2[0], arr2[1])
  }

  /**
   * Checks if the entity is overlapping with any of the things in the array
   * @param {Array} array
   * @param {Array} entity
   * @param {Number} size
   */
  overlapping(array, entity, size) {
    var overlapping = false;

    for (let i = 0; i < array.length; i++) {
      if (this.dist(array[i].location, entity) < size) {
        overlapping = true;
      }
    }

    return overlapping
  }
}