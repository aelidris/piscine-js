function dayOfTheYear(date) {
    if (!(date instanceof Date)) {
      throw new Error('Input must be a Date object');
    }
  
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth(); 
    const day = date.getUTCDate();
  
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (isLeapYear(year)) {
      daysInMonth[1] = 29;
    }
  
    let dayOfYear = day;
    for (let i = 0; i < month; i++) {
      dayOfYear += daysInMonth[i];
    }
  
    return dayOfYear;
  }
  
  function newFormat(date) {
    const year = String(date.getUTCFullYear()).padStart(4, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
 