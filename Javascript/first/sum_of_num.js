alert("Hi")
let a=parseInt(prompt("Enter number N"))
let req=0;
for(let i=a;i>0;i-=1){
    req+=a;
    a-=1
}
alert("Sum of first N natural numbers is "+req);
