const endTime = new Date('2021-09-29 22:35:00').getTime();
const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');
setInterval(() => {
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime)/1000);
    // const time = endTime - nowTime;
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((endTime / (1000 * 60 * 60)) - (nowTime / (1000 * 60 * 60)))%24;
    let minutes = Math.floor((endTime / (1000 * 60)) - (nowTime / (1000 * 60 )))%60;
    let seconds = Math.floor((endTime / (1000)) - (nowTime / (1000)))%60;

    days = days <10 ? `0${days}` : days;
    hours = hours <10 ? `0${hours}` : hours;
    minutes = minutes <10 ? `0${minutes}` : minutes;
    seconds = seconds <10 ? `0${seconds}` : seconds;

    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = seconds;

}, 1000)
