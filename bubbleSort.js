function bubbleSort(arr) {
    for(var i =  arr.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP 
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

function bubbleSortOptimized(arr) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    var noSwaps;
 
    for(var i =  arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP 
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }    
}

bubbleSortOptimized([10,7,8,9]);