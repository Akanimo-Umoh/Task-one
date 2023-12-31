function Day() {
    const date = new Date();
    let dayOfTheWeek = new Array(7);
    dayOfTheWeek[0] = "Sunday"
    dayOfTheWeek[1] = "Monday"
    dayOfTheWeek[2] = "Tuesday"
    dayOfTheWeek[3] = "Wednesday"
    dayOfTheWeek[4] = "Thursday"
    dayOfTheWeek[5] = "Friday"
    dayOfTheWeek[6] = "Saturday"
    document.querySelector("[data-testid='currentDayOfTheWeek']").innerHTML = dayOfTheWeek[date.getDay()];
}
Day();

function currentUTCTime() {
    let d = new Date();
    let utcTimeMilli = d.getTime();
    document.querySelector("[data-testid='currentUTCTime']").innerHTML = utcTimeMilli;
}
currentUTCTime();
setInterval(currentUTCTime, 1000);