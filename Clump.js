class Clump {
	constructor(x, y) {
		this.clumpiness = config.clumpiness;
		this.clumpinessRadius = this.clumpiness / 2;

		this.location = [x,y];
		this.foods = []
	}

	show() {
		this.foods.forEach(food => {
			food.show()
		})
	}
}