const array = [3, 6, 1, 8, 2, 8, 9, 4, 5];

function selectionSort(arr) {
  const array = Array.from(arr);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      ++count;
      if (array[minIndex] > array[j]) minIndex = j;
    }
    if (minIndex === i) continue;
    let tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }
  console.log("***** Selection sort ******");
  return { array, count };
}

console.log(selectionSort(array));
