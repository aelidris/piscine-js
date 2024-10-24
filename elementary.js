function multiply(a, b) {
    let result = 0;
    const positive = Math.abs(b);
    
    for (let i = 0; i < positive; i++) {
        result += a;
    }

    return b < 0 ? -result : result;
}

function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");

    let quotient = 0;
    let dividend = Math.abs(a);
    const divisor = Math.abs(b);

    while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }

    return (a < 0 && b > 0) || (a > 0 && b < 0) ? -quotient : quotient;
}

function modulo(a, b) {
    if (b === 0) throw new Error("Cannot modulo by zero");

    const divisor = Math.abs(b);
    let remainder = Math.abs(a);

    while (remainder >= divisor) {
        remainder -= divisor;
    }

    return a < 0 ? -remainder : remainder;
}