const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let count = 0;

//NOTE: iteration (loop)
function binarySearch(arr, item) {
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

// console.log(binarySearch(array, 16));
// console.log(count);

//NOTE: recursion
function binarySearchRec(arr, item, start, end) {
  count++;
  if (start > end) return false;
  let middle = Math.floor((start + end) / 2);
  if (item === arr[middle]) return true;
  if (item < arr[middle]) return binarySearch(arr, item, start, middle - 1);
  else return binarySearch(arr, item, middle + 1, end);
}

console.log(binarySearch(array, 4, 0, array.length));
console.log(count);
