function isValid(date) {
    // Check if the input is a Date object or a valid timestamp (number)
    if (date instanceof Date) {
        return !isNaN(date.getTime());
    }
    if (typeof date === 'number') {
        // Ensure the number is a valid timestamp
        return !isNaN(new Date(date).getTime());
    }
    return false;
}

function isAfter(date1, date2){
    return isValid(date1) && isValid(date2) && date1>date2
}

function isBefore(date1, date2){
    return isValid(date1) && isValid(date2) && date1<date2
}

function isFuture(date){
    return isValid(date) && date > new Date()
}

function isPast(date) {
    return isValid(date) && date < new Date()

}
