class Utility {
	showFrameRate() {
		let fps = frameRate();
		fill(256)
		textSize(20);
		text(round(fps), width - 50, 50);
	}

	getDiameter() {
		return 5
	}

	// TODO: show number of food
	// TODO: show number of Ants
}