function pick(obj, arr){
    if (typeof arr === 'string'){
        arr = [arr]
    }
    let res = {}
    for (let i=0; i<arr.length;i++){
        for (const key in obj){
            if (arr[i] === key) {
                res[key] = obj[key] 
            }
        }
    }
    return res
}


function omit(obj, arr){
    if (typeof arr === 'string') {
        arr = [arr]
    }
    let res = {}
    for (const key in obj){
        let helper = true
        if (obj.hasOwnProperty(key)) {
            for (let i=0; i<arr.length;i++){
                if (arr[i] === key) {
                    helper = false
                } 
            }
            if (helper){
                res[key] = obj[key]
            }
        }
    }
    return res
}
