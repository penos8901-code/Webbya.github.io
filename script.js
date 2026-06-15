const start=new Date("2025-10-09T00:00:00");
function timer(){
let d=new Date()-start;
let days=Math.floor(d/86400000);
let h=Math.floor(d/3600000)%24;
let m=Math.floor(d/60000)%60;
let s=Math.floor(d/1000)%60;
document.getElementById('timer').innerHTML=`${days} дней ${h} часов ${m} минут ${s} секунд ❤️`;
}
setInterval(timer,1000);timer();

function love(){
document.getElementById('love').classList.toggle('hidden');
}
function music(){
document.getElementById('audio').play();
}
function openSite(){
document.getElementById('content').scrollIntoView({behavior:'smooth'});
}
