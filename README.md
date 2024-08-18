
# Benchmarking

	1. Before clumping and clump pruning
		* diameter - 5
		* Ants - 500
		* Food - 500
		* 9 FPS
	2. After clumping and clump pruning
		* diameter - 5
		* Ants - 500
		* Food - 500
		* 59 FPS

		* diameter - 1
		* Ants - 1000
		* Food - 1000
		* 24 FPS

		* diameter - 1
		* Ants - 2000
		* Food - 2000
		* 8 FPS





TODO:
1. Ant
	A. figure out if picture of an ant or primitives is faster/looks better
	B. Ant math
2. Pheromone trails
3. Path finding to food
4. Only update Framerate counter every 1/x second instead of every frame


Make ants explore and look for food
1. Each Ant needs to make a graph of its exploration weighting each edge of the graph depending on how good it is at getting to food
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




TODO:
- Base movement on graph
	- Travel along graph
		- Wander off occasionally to find food
	- Adjust weights of graph depending on what it finds
- Node creation
	- Add edges if the ant is close to other nodes
	- if it is close enough to an existing node just adjust the weight of that node
- Work with multiple ants
- Node number ++ needs to be moved from main to where a node is actually created to account for times where only an edge is made etc.
