document.addEventListener("DOMContentLoaded",function(){
document.querySelector("form").onsubmit = function(){
    let name =document.querySelector("#name").value;
    console.log("Hi"+ name);

    document.querySelector("h1").innerHTML = "Hi " + name;

    let now = new Date();
    console.log(now.getHours());

    let hour = now.getHours();
    if (hour < 12 ){
        document.querySelector("#time").innerHTML="😁Good Morning🌅";
    } else if (hour < 18){
     document.querySelector("#time").innerHTML = "Good Afternoon!";
 }else {
    document.querySelector("#time").innerHTML =" good night fella!🌛 "; }
    return false;


}
 });
