function repeat(string, number){
    if (number<0){
        return 'RangeError'
    }
    let i = 0
    let result = ''
    while (i<number){
        result += string 
        i++      
    }
    return result
}