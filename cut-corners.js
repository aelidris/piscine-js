function getSaveNum(n) {
    let tem = n
    let c = 0
    while (tem > 0) {
        tem = tem / 10
        c++
    }
    tem = n
    while (c >= 0) {
        let n = Math.pow(10, c)
        while (tem > n) {
            tem -= n
        }
        c--
    }
    return tem
}
function round(nbr){
    console.log(getSaveNum(nbr))
    if (nbr<0){
        let afterMult = nbr * 10
        let checker = ((nbr+getSaveNum(-nbr)) * 10 ) - 5
        if ((checker - afterMult) > 0) {
        return ((checker-5) /10) 
        }
        return ((checker+5) /10) 
    }
    let afterMult = nbr * 10
    let checker = ((nbr-getSaveNum(nbr)) * 10 ) + 5
    if ((checker - afterMult) > 0) {
        return ((checker-5) /10) 
    }
    return ((checker+5) /10) 
}
function ceil(nbr){  
    let checker = (nbr-getSaveNum(nbr)) 
    if (checker === nbr) {
        return checker
    }
    if (nbr<0) {
        checker = (nbr+getSaveNum(-nbr))-1
    }
    return checker+1
}
function floor(nbr){
    let checker = (nbr-getSaveNum(nbr)) 
    if (nbr<0) {
        checker = (nbr+getSaveNum(-nbr))-1  
    }
    return checker
}
function trunc(nbr){
    if (nbr<0) {
        return nbr+getSaveNum(-nbr)
    }
    return (nbr-getSaveNum(nbr))
}
