const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let count = 0;

//NOTE: iteration (loop)
function searchIteration(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = "not found";
  while (found === false && start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
// console.log(`Index: ${searchIteration(array, 11)}`);
// console.log(`Count: ${count}`);

//NOTE: iteration (loop) refactoring
function searchIterationRef(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  while (start <= end && arr[middle] !== item) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) return middle;
    item < arr[middle] ? (end = middle - 1) : (start = middle + 1);
  }
  return "Not found";
}
// console.log(`Index: ${searchIterationRef(array, 11)}`);
// console.log(`Count: ${count}`);

//NOTE: recursion
function searchRecursion(arr, item, start, end) {
  count++;
  if (start > end) return false;
  let middle = Math.floor((start + end) / 2);
  if (item === arr[middle]) return true;
  if (item < arr[middle]) return searchRecursion(arr, item, start, middle - 1);
  else return searchRecursion(arr, item, middle + 1, end);
}

// console.log(searchRecursion(array, 14, 0, array.length));
// console.log(count);

//NOTE: recursion refactoring

function searchRecursionRef(arr, item, start = 0, end = arr.length) {
  count++;
  let middle = Math.floor((start + end) / 2);
  if (start > end) return "Not found";
  if (item === arr[middle]) return middle;
  if (item < arr[middle])
    return searchRecursionRef(arr, item, start, middle - 1);
  else return searchRecursionRef(arr, item, middle + 1, end);
}
// console.log(`Index: ${searchRecursionRef(array, 17)}`);
// console.log(`Count: ${count}`);
