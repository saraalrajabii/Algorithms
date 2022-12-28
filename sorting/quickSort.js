//  quickSort will break arr to 2 array according to the pivot (first index ar last index value) // here will use last one
//recursive  function Start by thinking in edge cases that will break the loop


//time complexity -> o(n log(n)) worst case ->o(n^2) when the pivot max  or min number in the array 
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    // we don't need last one its pivot
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  // here we have 2 array and pivot

  return [...quickSort(leftArr) , pivot , ...quickSort(rightArr)]



};

console.log(quickSort([1, 3, 8, 2, 4, 3]));
