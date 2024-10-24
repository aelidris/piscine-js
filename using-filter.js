function filterShortStateName(arr){
    return arr.filter(word => word.length<7)
}

function filterStartVowel(arr) {
    return arr.filter(name => 'aeiou'.includes(name[0].toLowerCase()));
}


function filter5Vowels(arr) {
    return arr.filter(name => (name.match(/[aeiou]/gi) || []).length >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter(name => {
        const vowels = [...new Set(name.toLowerCase().match(/[aeiou]/g))];
        return vowels.length === 1;
    });
}

function multiFilter(arr) {
    return arr.filter(item => 
        item.capital.length >= 8 &&  
        !/^[aeiou]/i.test(item.name) &&  
        /[aeiou]/i.test(item.tag) &&  
        item.region !== 'South'  
    );
}
