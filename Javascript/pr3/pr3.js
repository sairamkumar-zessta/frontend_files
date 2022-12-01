let countValue = document.getElementById("countValue");
let value =parseInt(countValue.textContent)
function increase(){
    value += 1;
    countValue.textContent = value;
}
function decrease(){
    value -= 1;
    countValue.textContent = value;
}
function reset(){
    value =0;
    countValue.textContent = value;
}

