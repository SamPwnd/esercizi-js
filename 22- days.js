function getDays(firstDate, secondDate) {
    let timeBetween = secondDate.getTime() - firstDate.getTime();
    let oneDay = 24 * 60 * 60 * 1000;
    return timeBetween / oneDay;
}



let daysBetween = getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
);

console.log(daysBetween);