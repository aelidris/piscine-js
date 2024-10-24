function sameAmount(str, regex1, regex2) {
    const globalRegex1 = new RegExp(regex1, regex1.flags + (regex1.global ? '' : 'g'));
    const globalRegex2 = new RegExp(regex2, regex2.flags + (regex2.global ? '' : 'g'));
    
    const count1 = (str.match(globalRegex1) || []).length;
    const count2 = (str.match(globalRegex2) || []).length;
    
    return count1 === count2;
}