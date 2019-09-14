const second = document.querySelector(".second");
const minute = document.querySelector(".minutes");
const hour = document.querySelector(".hour");

setInterval( function(){
    
    const date = new Date();
    const secondTime = date.getSeconds();
    const minutesTime = date.getUTCMinutes();
    const hourTime = date.getHours();

    second.style.transform = `rotate(${6*secondTime +90}deg)`;
    minute.style.transform = `rotate(${6*minutesTime +90}deg)`;
    hour.style.transform = `rotate(${30*hourTime  +90}deg)`;

}, 1000);