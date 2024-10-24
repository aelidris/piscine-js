function map(arr, f){
    let result=[];
    for (let i=0; i<arr.length;i++){
        result.push(f(arr[i], i, arr));
    }
    return result
}
function flatMap(arr, f){
    let result=[]
    for(let i=0;i<arr.length;i++){
        const mapped = f(arr[i], i, arr)
        if (Array.isArray(mapped)){
            result.push(...mapped)
        } else {
            result.push(mapped)
        }
    }
    return result
}
