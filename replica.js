function replica(target, ...sources) {
    for (const source of sources) {
        for (const [key, value] of Object.entries(source)) {
            if (value instanceof RegExp) {
                target[key] = new RegExp(value.source, value.flags)
            }
            
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                if (typeof target[key] !== 'object' || target[key] === null || Array.isArray(target[key])) {
                    target[key] = {};
                }
                replica(target[key], value);
            } else {
                target[key] = value;
            }
        }
    }
    return target;
}

