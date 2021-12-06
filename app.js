let text= document.querySelector("#text");
let btnHide= document.querySelector("#btnHide");

btnHide.addEventListener("click", textHide);

function textHide(){
    text.style.display="none";
}



