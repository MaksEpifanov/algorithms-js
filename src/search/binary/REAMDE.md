# Binary search
In computer science, **binary search**, also known as **half-interval search**, **logarithmic search**, or **binary chop**, is a search algorithm that finds the position of a target value within a **SORTED** array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.
>[Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

![compare linear & binary search](https://res.cloudinary.com/practicaldev/image/fetch/s--PNWqc_R9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gb49p4klebgbtdwijpak.gif)

## Complexity
Worst-case performance:	`O(log n)`
Best-case performance	`O(1)`
Average performance	`O(log n)`

## References
- [www.tutorialspoint.com](https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm)
