function filterKeys(element, func){
    let res = {}
    for (const key in element){
        if (func(key)){
            res[key] = element[key]
        }      
    }
    return res
}

function mapKeys(element, func){
    let res = {}
    for (const [key, value] of Object.entries(element)) {
        res[func(key)] = value
        
    }
    return res
}

function reduceKeys(element, func, ini = ''){
    let res = ini
    let helper = false
    for (const key in element){
        if (ini === '' && !helper){
            res = key
            helper = true
            continue
        }
        res = func(res, key, ini)
    }
    return res
}
