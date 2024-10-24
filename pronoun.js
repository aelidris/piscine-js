function pronoun(str){
    let res = {};
    let checkStr = str.toLowerCase().replace(/[,.]/g, '').replace(/\n/g, ' ').split(' ');
    for (let i=0; i<checkStr.length;i++){
        if (personalPronouns(checkStr[i])){
            let pronoun = checkStr[i];
            if (!res[pronoun]) {
                res[pronoun] = { word: [], count: 0 };
            }
            res[pronoun].count++;
            if (checkStr[i + 1] && !personalPronouns(checkStr[i + 1])) {
                res[pronoun].word.push(checkStr[i + 1]);
            }
        }
    } 
    return res
}

function personalPronouns(str){   
        if (str==='i' || str==='you' || str==='he' || str==='she' || str==='it' || str==='they' || str==='we'){
            return true;
        }
    
    return false;
}

