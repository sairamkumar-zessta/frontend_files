let my_Array =[1,'six',9.8,true];
my_Array.splice(2,1,8.6);
my_Array.splice(3,0,"Happy","Good",8.6);
console.log(my_Array);
let item = my_Array.find(function(each){
    if (typeof(each) === 'string'){
        return true;
    }
    else{
        return false;
    }
});
let index = my_Array.findIndex(function(each){
    if (typeof(each) === 'boolean'){
        return true;
    }
    else{
        return false;
    }
});
console.log(index);
console.log(my_Array.includes(9.8));
console.log(my_Array.indexOf(true));
console.log(my_Array.lastIndexOf(8.6));
console.log(item);
console.log(my_Array.unshift(5));//returns length;
console.log(my_Array.shift());
let array2 = [4,9,2];
let new_one = my_Array.concat(array2);
console.log (new_one);
console.log(new_one.slice(3,7));
console.log(array2.join("-"));
console.log(array2.sort());