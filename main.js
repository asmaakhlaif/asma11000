var change = document.querySelector("div");
var Lbtn = document.querySelector(".small");
var Sbtn = document.querySelector(".big");

function smallsize(){

      body.classList.add("small");
      body.classList.remove("big");
      
}

function bigsize(){

    body.classList.add("small");
    body.classList.remove("big");

    
}

Lbtn.onclick = smallsize;
Sbtn.onclick = bigsize;

