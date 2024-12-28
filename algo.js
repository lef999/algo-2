function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

const array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);
console.log("Sorted Array:", insertionSort(array));
