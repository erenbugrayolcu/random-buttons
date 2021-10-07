function generateButton(){
    
    buton = document.getElementById('buton');

    spaceW = screen.height - buton.height;
    spaceH = screen.width - buton.width;

    setInterval(moveIt, 500);
}

function moveIt(){

    buton.style.top = Math.round(Math.random() * spaceW) + "px";
    buton.style.left = Math.round(Math.random() * spaceH) + "px";

}