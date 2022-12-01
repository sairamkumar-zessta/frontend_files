let head = document.getElementById("heading");
head.textContent = "Hello world!";
console.log(head.textContent);
let head1 = document.getElementById("head1");
function changeHeading(){
    if (head1.textContent === "Web Technologies"){
        head1.textContent = "4.0 Technlogies"
    }
    else{
        head1.textContent = "Web Technologies"
    }
    
}