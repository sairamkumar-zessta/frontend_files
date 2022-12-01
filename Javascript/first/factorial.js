alert("Hi")
let a=parseInt(prompt("Enter required factorial of number"));
let k=a;
let req=1;
while (a>0){
    req*=a;
    a-=1
}
alert("Factorial of "+k+" is "+ req)
