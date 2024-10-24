function slice(arr, startIndex = 0, endIndex = arr.length){
    if (startIndex<0) {
        startIndex = arr.length+startIndex;
    }
    if (endIndex<0) {
        endIndex = arr.length+endIndex;
    }
    let i = 0;
    let result = [];
    while (i<arr.length) {
        if (i===endIndex) {
            break;
        }
        if (i>=startIndex) {
            result.push(arr[i]);
        }
        i++;
    }
    if (typeof arr !== typeof result) {
        return result.join('');
    }
    return result;
}

