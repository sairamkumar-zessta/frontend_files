let m=parseInt(prompt("Enter First number"))
let n=parseInt(prompt("Enter Second number"))
let numArray=[]
let prime=null;
function is_prime(num){

    if (num <2 ) {
        prime=false
    }
    else if (num ===2 ) {
        prime=true
    }
    else{
        for (var k = 2; k < num; k++) {

            if (num % k === 0) {
                prime=false
                break
            }
        }
    }
return prime

}
for (var i = m; i <= n; i++) {
     prime=true;
    if (is_prime(i)) {
        numArray.push(i)
    }

}
console.log(numArray)
alert(JSON.stringify(numArray))
