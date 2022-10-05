function mergeSort(list) {
  if (list.length <= 1) return list;

  let middle = Math.floor(list.length / 2);

  let left = mergeSort(list.slice(0, middle));
  let right = mergeSort(list.slice(middle));

  const sorted = [];
  let iLeft = 0,
    iRight = 0;

  while (iLeft < left.length && iRight < right.length) {
    if (left[iLeft] < right[iRight]) {
      sorted.push(left[iLeft]);
      iLeft++;
    } else {
      sorted.push(right[iRight]);
      iRight++;
    }
  }

  return sorted.concat(left.slice(iLeft)).concat(right.slice(iRight));
}

console.log(mergeSort([4, 1, 6, 7, 3, 2, 8]));
