let x='racecar';
let splitStr = x.split(''); 
let reversedArr = splitStr.reverse();
let y = reversedArr.join('');
if(x==y)
{
    console.log("palindrom");
}
else{
    console.log("not palindrom");
}