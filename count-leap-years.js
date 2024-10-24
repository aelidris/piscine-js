function countLeapYears(date) {
    const year = date.getFullYear(); 

    function leapYearCountUntil(year) {
        const divisibleBy4 = Math.floor((year - 1) / 4);
        const divisibleBy100 = Math.floor((year - 1) / 100);
        const divisibleBy400 = Math.floor((year - 1) / 400);
        return divisibleBy4 - divisibleBy100 + divisibleBy400;
    }

    return leapYearCountUntil(year);
}

