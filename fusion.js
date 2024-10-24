function fusion(...args) {
    let res = {};
    for (let i = 0; i < args.length; i++) {
        for (let key in args[i]) {
            if (args[i].hasOwnProperty(key)) {
                let val = args[i][key];
                if (res.hasOwnProperty(key)) {
                    if (typeof res[key] === 'object' && !Array.isArray(res[key]) && typeof val === 'object' && !Array.isArray(val)) {
                        res[key] = fusion(res[key], val);
                    
                    } else if (Array.isArray(res[key]) && Array.isArray(val)) {
                        res[key] = [...res[key], ...val];
                    
                    } else if (typeof res[key] === 'number' && typeof val === 'number') {
                        res[key] += val;

                    } else if (typeof res[key] === 'string' && typeof val === 'string') {
                        res[key] = res[key] + ' ' + val;

                    } else {
                        res[key] = val;
                    }
                
                } else {
                    res[key] = val;
                }
            }
        }
    }

    return res;
}

