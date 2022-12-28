let bubbleSort = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them "refactor"

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

var arr = [661, 4, 25, -12, 7];

console.log(bubbleSort(arr));
