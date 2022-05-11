const array = [2, 5, 1, 8, 63, 3, 12, 88, 4, 6]
let count = 0;

function linaerSearch(array, searchItem) {
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === searchItem) return i
  }
  return null
}

//NOTE: Best-case perfomance O(1)
console.log(linaerSearch(array, 2))
console.log(count) // count = first element in array


//NOTE: Worst-case perfomance O(n)
console.log(linaerSearch(array, 6))
console.log(count) // count = array length
