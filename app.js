const timeEl = document.querySelector('#time');
const dateEl = document.querySelector('#date');
const currentWeatherItemsEl = document.querySelector('#current-weather-items');
const timezone = document.querySelector('#time-zone');
const countryEl = document.querySelector('#country');
const weatherForecastEl = document.querySelector('#weather-forecast');
const currentTempEl = document.querySelector('#current-temp');
const API_KEY = '0e12d640ad5c9b353dd38a9b9d74ef4d';

setInterval(() => {
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let hour = time.getHours();
    let minutes = time.getMinutes()
    let hoursIn12HrFormat = hour;
    if(hour>12){
        hoursIn12HrFormat = hour%12;
    }
    let ampm = 'AM';
    if(hour>=12){
        ampm = 'PM';
    }
    
    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = calcDay(day)+', '+date+' '+calcMonth(month);

}, 1000);

function calcDay(day){
    switch (day) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunnday';
    }
}
function calcMonth(month){
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
    }
}