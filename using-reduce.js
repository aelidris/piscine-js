function adder(arr, initialValue = 0){
    return arr.reduce(
        (sum, current) => sum + current ,
        initialValue,
    );
}

let firsttime= true;
function sumOrMul(arr, initialValue = 0){
    return arr.reduce(
        (operator, current) => { 
            if (initialValue%2===0 && initialValue !==0 && firsttime){
                operator = operator*initialValue;
                firsttime = false;
            } else if (initialValue!==2 && initialValue !==0 && firsttime) {
                operator = operator+initialValue;
                firsttime=false;
            }
            if(current%2===0){
                operator = operator*current;
            } else {
                operator = operator+current;
            }
            return operator
        }
    );
}

function funcExec(arr, initialValue = 0){
    const result = arr.reduce((accumulator, currentFunc) => {
            return currentFunc(accumulator);
        }, initialValue);
    return result;
}