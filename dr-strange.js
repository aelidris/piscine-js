function addWeek(date){
    const daysOf14DayWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday",
        "secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday"]
    
    //define of the epoch day
    const epoch = new Date('0001-01-01')
        
    //calculate the difference in days between the given date and the epoch
    //1day = 86.400.000 millisecondes (1second = 1000millisecondes)
    const daysSinceEpoch = (date-epoch)/86400000

    //Find the index of the day in the 14-day week
    const dayIndex = daysSinceEpoch % 14

    //return the corresponding day name
    return daysOf14DayWeek[dayIndex]    
}

function timeTravel({date,hour,minute,second}) {
    //Create a new Date object based on the provided date
    let newDate = new Date(date)

    //Set the new hour, minute, and second
    newDate.setHours(hour)
    newDate.setMinutes(minute)
    newDate.setSeconds(second)

    return newDate
}

