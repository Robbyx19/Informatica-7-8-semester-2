const  alarma = new Audio ("sound/alarma.mp3");
let counter = "00:01" ;

function count() {
   if (counter > 0){
 counter--;
 console.log(counter);
document.querySelector('h1').innerHTML = counter;

}
else if (counter== 0){
    counter--;
    alarma.currentTime = 0;
    alarma.play();
}
}

    document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
        setInterval(count, 1000);
        document.querySelector("button").disabled=true;

        }
});
