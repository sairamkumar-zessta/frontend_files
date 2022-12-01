let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let imageWidth = document.getElementById("imageWidth");
let width = 200;
imageElement.style.width = width +"px";
imageWidth.textContent = width +"px";
function increase(){
    if (width < 300){
        warningMessage.textContent="";
        width+=5;
        imageElement.style.width = width +"px";
        imageWidth.textContent = width +"px";
    }
    else{
        warningMessage.textContent = "Image size is Too big. decrease size";
    }
}
function decrease(){
    if (width > 100){
        warningMessage.textContent="";
        width-=5;
        imageElement.style.width = width +"px";
        imageWidth.textContent = width +"px";
    }
    else{
        warningMessage.textContent = "Image size is Too small. increase size";
    }
}