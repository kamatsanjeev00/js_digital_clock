const hEl = document.getElementById('hour');
const mEl = document.getElementById('minute');
const sEl = document.getElementById('second');
const ampmEl = document.getElementById('ampm');

function updateClock(){
    var clockTime = new Date();
   var h = clockTime.getHours();
   var m= clockTime.getMinutes();
   var s= clockTime.getSeconds() ;
   var ampm = "PM";

   if(h>12) {
    h = h-12;
    ampm ="AM";
   }

    hEl.innerHTML= h<10?"0"+h:h;
    mEl.innerHTML = m<10?"0"+m:m;
    sEl.innerHTML = s<10?"0"+s:s;
    ampmEl.innerHTML = ampm;
    setTimeout(updateClock, 1000);
}
updateClock()