let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");
function calculate(){
    if (billAmount.value === "" || percentageTip.value === ""){
        errorMessage.textContent = "Please Enter a Valid Input";
    }
    else{
        tipAmount.value = parseInt(billAmount.value) * 0.01 * parseInt(percentageTip.value);
        totalAmount.value = parseInt(tipAmount.value) + parseInt(billAmount.value);
        errorMessage.textContent = "";
    }
}