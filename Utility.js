class Utility {

	/**
	 * Shows the frame rate in the top right corner of the screen
	 */
	showFrameRate() {
		let fps = frameRate();
		fill(256)
		textSize(20);
		text("FPS: "+round(fps), width - 100, 50);
	}

	/**
	 * Show number of Food in the top right corner
	 */
	showNumberClumps() {
		fill(256);
		textSize(20);
		text("Number of Clumps: "+ ClumpList.length, width - 200, 100)
	}

	/**
	 * Show number of Ants in the top right corner
	 */
	showNumberAnts() {
		fill(256);
		textSize(20);
		text("Number of Ants: "+ Ants.length, width - 200, 75)
	}

	/**
	 * Get Random Int between min and max inclusive
	 * @param {number} min
	 * @param {number} max
	 */
	getRandomInRange(min, max) {
		return Math.random() * (max - min + 1) + min;
	}

	/**
	 * Get Random Int between min and max inclusive
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
}