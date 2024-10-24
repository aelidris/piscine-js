function matchCron(cronString, date) {
    const cronParts = cronString.split(' ');

    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; 
    const dayOfWeek = (date.getDay() + 6) % 7 + 1;

    const dateParts = [minute, hour, dayOfMonth, month, dayOfWeek];

    function matches(cronPart, datePart) {
        return cronPart === '*' || parseInt(cronPart) === datePart;
    }

    for (let i = 0; i < 5; i++) {
        if (!matches(cronParts[i], dateParts[i])) {
            return false;
        }
    }

    return true;
}
