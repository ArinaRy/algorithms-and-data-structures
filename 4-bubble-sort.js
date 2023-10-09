const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 38, 6, 3, 32]
let count = 0

function bubbleSort(array) {
    let tmp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            count += 1;
            if (array[j+1] < array[j]) {
                tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp; 
            }
        }
        
    }
    return array;
}

console.log(bubbleSort(arr));
console.log(count);