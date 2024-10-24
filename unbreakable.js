function split(string, separator) {
    const result = [];
    let current = '';
    
    // Handle case when the separator is an empty string
    if (separator === '') {
        for (let i = 0; i < string.length; i++) {
            result.push(string[i]); // Push each character as a separate element
        }
        return result;
    }
    
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i + separator.length) === separator) {
            result.push(current);  // Add current substring to result
            current = '';          // Reset current string
            i += separator.length - 1; // Skip the length of the separator
        } else {
            current += string[i];  // Append current character
        }
    }

    // Push the last part after the loop
    result.push(current);
    
    return result;
}

function join(arr, sep, result = '') {
    if (arr.length === 0) {
        return result;
    }
    if (result === '') {
        result = arr[0];
    } else {
        result += sep + arr[0];
    }
    return join(arr.slice(1), sep, result);
}

