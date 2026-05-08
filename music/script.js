document.addEventListener("DOMContentLoaded",function(){
    const kick = new Audio("sounds/kick.wav");
   const michael = new Audio ("sounds/michael-jackson-hee-hee.mp3");
   const yuh = new Audio ("sounds/yuh.wav");
   const tom = new Audio ("sounds/tom.wav");
   const snare = new Audio ("sounds/snare.wav");
   const open = new Audio ("sounds/openhat.wav");
   const hi = new Audio ("sounds/hihat.wav");
   const cow = new Audio ("sounds/cowbell.wav");
   const clap = new Audio ("sounds/clap.wav");
const kickDiv =document.querySelector("#kick");
const michaelDiv =document.querySelector("#michael");
const yuhDiv =document.querySelector("#yuh");
const tomDiv =document.querySelector("#tom");
const snareDiv =document.querySelector("#snare");
const openDiv =document.querySelector("#open");
const hiDiv =document.querySelector("#hi");
const cowDiv =document.querySelector("#cow");
const clapDiv =document.querySelector("#clap");
window.addEventListener("keydown",function(event){
    if (event.key == "a"){
        kick.currentTime = 0;
        kick.play();
        kickDiv.classList.add("active");

         } else if (event.key =="s"){
            michael.currentTime = 0;
            michael.play();
              michaelDiv.classList.add("active");
         } else if (event.key =="d"){
            yuh.currentTime = 0;
            yuh.play();
        yuhDiv.classList.add("active");
                   }
                   else if (event.key=="f"){
                    tom.currentTime = 0
                    tom.play();
                    tomDiv.classList.add("active");
                   }


            else if (event.key =="g"){
            snare.currentTime = 0;
            snare.play();
              snareDiv.classList.add("active");


} else if (event.key =="f"){
            fah.currentTime = 0;
            fah.play();
              kickDiv.classList.add("active");
               }
        })

window.addEventListener("keyup", function(event){
if (event.key =="a"){
kickDiv.classList.remove("active");
}
else if (event.key =="s"){
    michaelDiv.classList.remove("active");
}
else if (event.key =="d"){
    yuhDiv.classList.remove("active");

}
else if (event.key=="f"){
    tomDiv.classList.remove("active");
}
else if (event.key=="g"){
    snareDiv.classList.remove("active");
}

  })
 })
