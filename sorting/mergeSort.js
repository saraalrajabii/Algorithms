// here will use recursive function
// recursively split array to the half
//merge to array together

// time complexity o(n log(n))
// ex ->[1,4,2,8,345]
//[1,4,2]  [8, 345]
//[1,4] [2]  [8] [345]
//[1] [4] [2]  [8] [345]
// we need to sort and merge--> now we know single array is naturally sorted
//[1,4]  [2,8]  [345]
// [1,2,4, 8] [345]
// [1,2,4, 8 , 345]

const merge = (leftArr, rightArr) => {
  console.log(leftArr, rightArr);
  // leftArr , rightArr are sorted
  let output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  // if there is any element did not  merge

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  // slice will make copy for our array
  let leftArr = array.slice(0, middleIndex);
  let rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([661, 4, 25, -12, 7]));
