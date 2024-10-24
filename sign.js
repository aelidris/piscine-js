const sign = (nb) => nb>0 ? 1 : (nb === 0 ? 0 : -1)
const sameSign = (a,b) => {
    return (a === 0 && b === 0) || (a > 0 && b > 0) || (a < 0 && b < 0);
}