function filter(arr, f){
    let res = [];
    for (let i=0;i<arr.length;i++){
        if (f(arr[i], i, arr)){
            res.push(arr[i]);
        }
    }
    return res;
}

function reject(arr, f){
    let res = [];
    for (let i=0;i<arr.length;i++){
        if (!f(arr[i], i, arr)){
            res.push(arr[i]);
        }
        
    }
    return res;
}

function partition(arr, f){
    let resTrue = [];
    let resFalse = [];
    for (let i = 0; i<arr.length; i++) {
        if (f(arr[i], i, arr)){
            resTrue.push(arr[i]);
        } else {
            resFalse.push(arr[i]);
        }
    }
    return [resTrue, resFalse]
}

