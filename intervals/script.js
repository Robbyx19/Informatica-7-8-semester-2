const  alarma = new Audio ("sound/alarma.mp3");
let counter = 25;

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled=true;
    if (counter== 0){
        alarma.currentTime = 0
        alarma.play();
    }
    if function () == -1
    };
});
