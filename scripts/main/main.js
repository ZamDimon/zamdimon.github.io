// Attaching timestamps automatically to the page

/// Get difference in days between two dates.
/// Taken from https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
function dateDifferenceInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

/// Convert days to the months-year format
function getYearsAndMonths(days) {
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30);
    return [years, months];
}

/// Convert days to the months-year format and return a string
function getYearsAndMonthsString(days) {
    const [years, months] = getYearsAndMonths(days);
    const yearsString = years === 0? '' : years === 1 ? '1 year, ' : `${years} years, `;
    const monthsString = months === 0? '' : months === 1 ? '1 month' : `${months} months`;
    
    return `${yearsString}${monthsString}`;
}

// Attach the time passed since the start of the project
const timeDivs = [
    ['dl-time', '2021-11-15'],
    ['dl-time-research', '2023-06-01'],
    ['karazin-time', '2021-09-01'],
]

for (const [id, startDate] of timeDivs) {
    const par = document.getElementById(id);
    let startTime = new Date(startDate);
    let now = new Date();
    let daysPassed = dateDifferenceInDays(startTime, now);
    par.innerHTML = getYearsAndMonthsString(daysPassed);
}