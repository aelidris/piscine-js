function indexOf(arr, value, startIndex = 0) {
    let i = startIndex;
    while (i < arr.length) {
        if (arr[i] === value) {
            return i;
        }
        i++;
    }
    return -1;
}

function lastIndexOf(arr, value, startIndex = arr.length - 1) {
    let i = startIndex;
    while (i >= 0) {
        if (arr[i] === value) {
            return i;
        }
        i--;
    }
    return -1;
}

function includes(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            return true;
        }
        i++;
    }
    return false;
}


