function filterEntries(element, func) {
    let res = {};
    for (const [key, value] of Object.entries(element)) {
        if (func([key, value])) {
            res[key] = value;
        }
    }
    return res;
}

function mapEntries(element, func) {
    let res = {};
    for (const [key, value] of Object.entries(element)) {
        const [newKey, newValue] = func([key, value]); 
        res[newKey] = newValue; 
    }
    return res;
}

function reduceEntries(element, func, initialValue) {
    let res = initialValue;
    for (const [key, value] of Object.entries(element)) {
        res = func(res, [key, value]);
    }
    return res;
}


function totalCalories(cart) {
    let res;
    res = reduceEntries(cart, (total, [item, grams]) => {
        const caloriesPer100g = nutritionDB[item]?.calories || 0;
        return total + (grams / 100) * caloriesPer100g;
    }, 0);
    let resF = res.toFixed(2);
    return parseFloat(resF);
}

function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
        const carbsPer100g = nutritionDB[item]?.carbs || 0;
        const totalCarbs = (grams / 100) * carbsPer100g;
        return totalCarbs < 50;
    });
}

function cartTotal(groceriesCart) {
    return mapEntries(groceriesCart, ([item, grams]) => {
        let nutrition = nutritionDB[item];
        if (!nutrition) return [item, null]; 
        let totalNutrition = mapEntries(nutrition, ([key, value]) => {
            let totalValue = (value * grams) / 100;
            return [key, parseFloat(totalValue.toFixed(3))]; 
        });
        return [item, totalNutrition]; 
    });
}
