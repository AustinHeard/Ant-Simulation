TODO:
	1. Ant
		A. figure out if picture of an ant or primitives is faster/looks better
		B. Give ants more angles that they can walk in
		C. Ant math
	2. Food
	3. Pheromone trails
	4. Path finding to food
	5. Only update Framerate every half second instead of every frame


	Make ants explore and look for food
	1. Explore
		1. Wander function
	2. Eat Food
		1. eatFood function
		2. senseFood function
	3. Each Ant needs to make a graph of its exploration weighting each edge of the graph depending on how good it is at getting to food
		1. All of these graphs need to be combined to figure out the strength of the pheromones on each edge of the graph

	Spawn many ants