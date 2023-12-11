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
	 */
	getRandomInRange(min, max) {
		return Math.random() * (max - min + 1) + min;
	}
}