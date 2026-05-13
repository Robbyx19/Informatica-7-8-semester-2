const kick = new Audio("sound/alarma.mp3");
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#one').onclick = function(){
        counter = 60;
        document.querySelector('h1').innerHTML = "1:00";
    }
        document.querySelector('#five').onclick = function(){
        counter = 300;
        document.querySelector('h1').innerHTML = "5:00";
    }
        document.querySelector('#ten').onclick = function(){
        counter = 600;
        document.querySelector('h1').innerHTML = "10:00";
    }
});


function count() {
    if(counter > 0) {
        counter--;
        let mins = Math.floor(counter/60);
        let seconds = counter-(mins*60);
        if (seconds < 10) {
            seconds = "0"+seconds;
        }
        document.querySelector('h1').innerHTML = mins + ":" + seconds;
    }
    if(counter == 0) {
        alarm.currentTime = 0;
        alarm.play();
        counter--;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#start').onclick = function(){
        setInterval(count, 1000);
        document.querySelector("#start").disabled = true;
        document.querySelector("#one").disabled = true;
        document.querySelector("#five").disabled = true;
        document.querySelector("#ten").disabled = true;
    }
});
