const date = new Date();
const weekDay = date.getDay();

function wD (x) {
let day;

    switch (x){
    case 0:
        day = 'Sunday';
        return console.log(day);
    case 1:
        day = 'Monday';
        return console.log(day);
    case 2:
        day = 'Tuesday';
        return console.log(day);
    case 3:
        day = 'Wednesday';
        return console.log(day);
    case 4:
        day = 'Thursday';
        return console.log(day);
    case 5:
        day = 'Friday';
        return console.log(day);
    case 6:
        day = 'Saturday';
        return console.log(day);
    dafault: 
        day = 'Invalid';
    }
}
wD(weekDay);
