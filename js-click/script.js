let i= 0

function count(){
    i++;

    let currentclicks= new Clicks();
    let heading = document.queryselector("h1");
    heading.innerHTML = currentclicks;
