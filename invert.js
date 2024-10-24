function invert(obj){
    const res = {}
    for (let item in obj) {
        console.log(item);
        console.log(obj[item]);
        if (obj.hasOwnProperty(item)) {
            res[obj[item]]=item
        }       
    }
    return res
}
