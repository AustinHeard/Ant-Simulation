TODO:
	1. Ant
		A. figure out if picture of an ant or primitives is faster/looks better
		B. Ant math
	2. Pheromone trails
	3. Path finding to food
	4. Only update Framerate counter every half second instead of every frame


	Make ants explore and look for food
	1. Explore
		1. Wander function
	2. Eat Food
		1. eatFood function
		2. senseFood function
	3. Each Ant needs to make a graph of its exploration weighting each edge of the graph depending on how good it is at getting to food
		1. All of these graphs need to be combined to figure out the strength of the pheromones on each edge of the graph

	# Ideas for making the weighted graph for the ants
	A. Every time the Ant changes direction drop a point that is added to the graph
		Pros:
			- Simple
		Cons:
			- How to combine the graphs from individual ants
				- If all of the ants start at the same position then they will be all of the same graph from the beginning
	B. Decide initial weight of edge of graph depending on ____
	C. If food is found take a piece and return to the start with it, raising the weight of the edges taken to get back
		- Check the math https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms before implementing anything