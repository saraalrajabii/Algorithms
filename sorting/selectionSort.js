// in-place algorithm

// find min and put it in first index
// swapping

let selectionSort  = (array) => {
  for (var i = 0; i < array.length-1; i++) {
    //set min to the current iteration of i
    var lowest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }

    var temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  }
  return array
};

// Javascript program for implementation of selection sort
// function swap(arr, xp, yp) {
//   var temp = arr[xp];
//   arr[xp] = arr[yp];
//   arr[yp] = temp;
// }

// function selectionSort(arr, length) {
//   var i, j, min_idx;

//   // One by one move boundary of unsorted subarray
//   for (i = 0; i < length - 1; i++) {
//     // Find the minimum element in unsorted array
//     min_idx = i;
//     for (j = i + 1; j < length; j++) if (arr[j] < arr[min_idx]) min_idx = j;

//     // Swap the found minimum element with the first element
//     swap(arr, min_idx, i);
//   }

//   return arr;
// }

var arr = [-64, 25, 12, -22, 661];
var length = 5;
console.log(selectionSort(arr, length));
