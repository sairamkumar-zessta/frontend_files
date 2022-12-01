alert("Hi");
a=parseInt(prompt("Enter Number a"))
b=parseInt(prompt("Enter Number b"))
c=parseInt(prompt("Enter Number c"))
d=parseInt(prompt("Enter Number d"))
if (a < b && a<c && a<d){
    alert("smaller number is "+a)
}
else if (b < c && b<d ){
    alert("smaller number is "+b)
}
else if (c < d){
    alert("smaller number is "+c)
}
else{
    alert("smaller number is "+d)
}
