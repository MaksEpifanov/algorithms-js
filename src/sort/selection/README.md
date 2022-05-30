# Selection sort

In computer science, **selection sort** is an in-place comparison [sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm). It has an O(n^2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort). Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

> [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)

![selection sort](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/selection_sort/images/SelectionSort.gif)  
[Original Source](https://visualgo.net/en/sorting) - visualgo.net

## Complexity

|             | Worst-case       | Best-case        | Average          |
| ----------- | ---------------- | ---------------- | ---------------- |
| comparisons | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) |
| swaps       | O(n)             | O(1)             | O(n)             |

## References

- [www.programiz.com](https://www.programiz.com/dsa/selection-sort)
- [www.youtube.com](https://www.youtube.com/watch?v=JU767SDMDvA)
- [Visualization and "audibilization" of the Selection Sort algorithm](https://www.youtube.com/watch?v=92BfuxHn2XE)
