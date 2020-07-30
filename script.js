setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock()
{
    const currDate = new Date();
    const secondsRatio = currDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currDate.getMinutes()) /60;
    const hoursRatio = (minutesRatio+ currDate.getHours()) /12;
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotRatio)
{
    element.style.setProperty('--rotation', rotRatio*360);
}

setClock();