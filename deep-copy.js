function deepCopy(obj) {
    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepCopy(obj[i]); 
        }
        return arrCopy;
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags); 
    }

    if (obj !== null && typeof obj === 'object') {
        let objCopy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                objCopy[key] = deepCopy(obj[key]);
            }
        }
        return objCopy;
    }
    return obj;
}

