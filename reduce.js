function fold(arr, f, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = f(accumulator, arr[i]);
    }
    return accumulator;
}

function foldRight(arr, f, initialValue) {
    let accumulator = initialValue;
    for (let i = arr.length - 1; i >= 0; i--) {
        accumulator = f(accumulator, arr[i]);
    }
    return accumulator;
}

function reduce(arr, f) {
    if (arr.length === 0) {
        throw new Error('Array must have at least one element');
    }
    
    let accumulator = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        accumulator = f(accumulator, arr[i]);
    }
    return accumulator;
}

function reduceRight(arr, f) {
    if (arr.length === 0) {
        throw new Error('Array must have at least one element');
    }
    
    let accumulator = arr[arr.length - 1]; 
    for (let i = arr.length - 2; i >= 0; i--) {
        accumulator = f(accumulator, arr[i]);
    }
    return accumulator;
}
