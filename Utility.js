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

	// TODO: show number of food
	showNumberFood() {
		fill(256);
		textSize(20);
		text("Number of Food: "+FoodList.length, width - 200, 100)
	}
	// TODO: show number of Ants
	showNumberAnts() {
		fill(256);
		textSize(20);
		text("Number of Ants: "+Ants.length, width - 200, 75)
	}
}