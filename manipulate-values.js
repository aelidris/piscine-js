function filterValues(element, func){
    let res = {}
    for (const key in element){
        if (func(element[key])){
            res[key] = element[key]
        }
    }
    return res
}

function mapValues(element, func){
    let res = {}
    for (const key in element) {
        res[key] = func(element[key])
    }
    return res
}

function reduceValues(element, func, ini = 0){
    let res = ini
    for (const key in element){
        res = func(res, element[key])
    }
    return res
}
