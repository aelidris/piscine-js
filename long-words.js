
const check = (currentWord) => !(currentWord.length<5 || typeof(currentWord) !== 'string')

const longWords = (arr) => arr.every(check)

const check2 = (currentWord) => (currentWord.length>=10 && typeof(currentWord)==='string')

const oneLongWord = (arr) => arr.some(check2)

const check3 = (currentWord) => currentWord.length<7 && typeof(currentWord)==='string'

const noLongWords = (arr) => arr.every(check3)



