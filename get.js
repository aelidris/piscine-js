function get(src, path) {
    if (src == null) {
        return undefined;
    }

    const keys = path.split('.');
    let result = src;

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (result == null) {
            return undefined;
        }

        if (i === keys.length - 1 && key === 'toString' && typeof result.toString === 'function') {
            return result.toString;
        }

        if (!(key in result)) {
            return undefined;
        }

        result = result[key];
    }

    return result;
}