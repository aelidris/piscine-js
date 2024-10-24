function defaultCurry(obj1) {
    return function (obj2) {
        return { ...obj1, ...obj2 };
    };
}

function mapCurry(fn) {
    return function (obj) {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => fn([k, v]))
        );
    };
}

function reduceCurry(fn) {
    return function (obj, initialValue) {
        return Object.entries(obj).reduce((acc, [k, v]) => fn(acc, [k, v]), initialValue);
    };
}


function filterCurry(fn) {
    return function (obj) {
        return Object.fromEntries(
            Object.entries(obj).filter(([k, v]) => fn([k, v]))
        );
    };
}

function reduceScore(personnel, initialScore = 0) {
    return reduceCurry((total, [k, v]) => {
        if (v.isForceUser) {
            return total + v.pilotingScore + v.shootingScore;
        }
        return total;
    })(personnel, initialScore);
}


function filterForce(personnel) {
    return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel);
}



function mapAverage(personnel) {
    return mapCurry(([key, value]) => {
        const { pilotingScore, shootingScore } = value;
        const averageScore = ((pilotingScore + shootingScore) / 2).toFixed(2);
        return [key, { ...value, averageScore: parseFloat(averageScore) }];
    })(personnel);
}


