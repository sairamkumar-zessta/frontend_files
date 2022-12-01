let bulbImage = document.getElementById('bulbImage');
let catImage = document.getElementById('catImage');
let switchStatus = document.getElementById('switchStatus');
let offSwitch = document.getElementById('offSwitch');
let onSwitch = document.getElementById('onSwitch')
function switchOff(){
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchStatus.textContent = "Switched Off"
    offSwitch.style.backgroundColor = "Red";
    onSwitch.style.backgroundColor = "#cbd2d9";
}

function switchOn(){
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchStatus.textContent = "Switched On"
    offSwitch.style.backgroundColor = "#cbd2d9";
    onSwitch.style.backgroundColor ="green" ;
}