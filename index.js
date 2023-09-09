const date = new Date();

function Day() {
    let dayOfTheWeek = new Array(7);
    dayOfTheWeek[0] = "Sunday"
    dayOfTheWeek[1] = "Monday"
    dayOfTheWeek[2] = "Tuesday"
    dayOfTheWeek[3] = "Wednesday"
    dayOfTheWeek[4] = "Thursday"
    dayOfTheWeek[5] = "Friday"
    dayOfTheWeek[6] = "Saturday"
    return dayOfTheWeek[date.getDay()];
}
const currentDay = document.querySelector("#currentDayOfTheWeek");
currentDay.innerHTML = Day();

document.querySelector("#currentUTCTime").innerHTML = date.toUTCString();