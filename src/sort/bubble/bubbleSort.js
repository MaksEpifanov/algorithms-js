const array = [3, 6, 1, 8, 2, 8, 9, 4, 5];

//NOTE: regular bubble sort
function regularBubbleSort(arr) {
  const array = Array.from(arr); // avoid side effect
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      ++count;
      if (array[i] > array[j]) continue;
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }
  console.log("***** Regular bubble sort algorithm *****");
  return { array, count };
}
console.log(regularBubbleSort(array));

//NOTE: optimized bubble sort
function optimizedBubbleSort([...array], count = 0, completed = false) {
  // avoid side effect
  while (!completed) {
    completed = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        ++count;
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // without function declaration tmp
        completed = false;
      }
    }
  }
  console.log("****** Optimized bubble sort algorithm *****");
  return { array, count };
}
console.log(optimizedBubbleSort(array));
