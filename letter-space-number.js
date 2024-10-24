function letterSpaceNumber(word) {
    const matches = word.match(/[a-zA-Z]\s\d(?!\d)(?![a-zA-Z])/g); 
    return matches ? matches : [];
}
 

