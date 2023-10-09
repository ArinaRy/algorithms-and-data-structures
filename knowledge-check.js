const arrayLinearSearch = [1,4,5,8,5,1,2,7,5,2,11];
count = 0;

// function linearSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             count += 1;
//             return i;
//         }
//         count += 1;
//     }
//     return null;
// }

// console.log(linearSearch(arrayLinearSearch, 7));
// console.log(count);

////////////////////////////////////////////////////////////////////
const arrayBinarySearch = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function binarySearch(array, item) {
//     let found = false;
//     let start = 0;
//     let middle;
//     let end = array.length;
//     let position = -1;
//     while (found === false && start <= end) {
//         count += 1;
//         middle = Math.floor((start+end)/2);
//         if (array[middle] === item) {
//             found = true;
//             position = middle;
//         } if (item < array[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return position;
// }

// console.log(binarySearch(arrayBinarySearch, 9));
// console.log(count);

////////////////////////////////////////////////////////////////////

const arraySelectionSort = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         minIndex = i;

//         for (let j = i + 1; j < array.length; j++) {
//             count += 1;
//             if (array[j] < array[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         let tmp = array[i];
//         array[i] = array[minIndex];
//         array[minIndex] = tmp;
//     }
//     return array;
// }

// console.log(selectionSort(arraySelectionSort));
// console.log(count);
