const arrToSet = arr => new Set(arr);
const arrToStr = arr => arr.join('');
const setToArr = set => Array.from(set);
const setToStr = set => Array.from(set).join('');
const strToArr = str => [...str];
const strToSet = str => new Set([...str]);
const mapToObj = map => {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value; 
    }
    return obj;
};
const objToArr = obj => Object.values(obj);
const objToMap = obj => new Map(Object.entries(obj));
const arrToObj = arr => arr.reduce((obj, value, index) => {
    obj[index] = value;
    return obj;
}, {});
const strToObj = str => [...str].reduce((obj, char, index) => {
    obj[index] = char; 
    return obj;
}, {});
const superTypeOf = value => {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'Array'; 
    if (value instanceof Map) return 'Map'; 
    if (value instanceof Set) return 'Set';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'object') return 'Object'; 
    if (typeof value === 'function') return 'Function'; 
    if (typeof value === 'number') return 'Number'; 
    return typeof value; 
};