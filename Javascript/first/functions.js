function greeting(){
    console.log("Hello World")
}
greeting()
let greeting1=function(name){
    console.log("Hello "+name)
}
greeting1("sai")
function addNum(num1,num2) {
    return num1+num2
}
addition=addNum(2,8)
console.log(addition)
function wish(greet="Hi",name="Raju"){
    return greet + name
}
console.log(wish("Hello"))


//Local & Global Scope
let v= "Global v"
let stuff = "GLOBAL STUFF"
function fun(stuff) {
    console.log(v);
    stuff ="Reassign stuff inside func"
    console.log(stuff);
}
fun();
console.log(stuff)
