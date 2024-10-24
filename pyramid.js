function pyramid(char, depth) {
    let res = '';
    for (let i = 1; i <= depth; i++) {
        const stars = char.repeat(2 * i - 1);
        const spaces = ' '.repeat((depth - i)*char.length);
        res += spaces + stars;
        if (i < depth) {
            res += '\n'; 
        }
    }
    return res;
}

console.log(pyramid('{}', 12));