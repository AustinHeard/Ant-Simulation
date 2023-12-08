class Utility {

	/**
	 * Shows the frame rate in the top right corner of the screen
	 */
	showFrameRate() {
		let fps = frameRate();
		fill(256)
		textSize(20);
		text(round(fps), width - 50, 50);
	}

	// TODO: show number of food
	// TODO: show number of Ants
}