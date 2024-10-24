const escapeStr = "`\\/\"'"
const arr = [4, '2']
Object.freeze(arr)
const obj = {
    str : "string",
    num : 12,
    bool : true,
    undef : undefined,
}
Object.freeze(obj)
const nested = Object.freeze({
    arr : Object.freeze([4, undefined, '2']),
    obj : Object.freeze({
        str : "string",
        num : 12,
        bool : true,
    })
})


