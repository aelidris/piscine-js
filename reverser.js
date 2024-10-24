function reverse(arr){
    let i = arr.length-1
    let result = []
    while (i>=0) {
        result.push(arr[i])
        i--
    }
    if (typeof arr === 'string'){
        return result.join('')
    }
    return result
}
