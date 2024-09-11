function longword(s){
    const word1=s.split(" ");
    let long=word1[0];
    for(let i=1;i<word1.length;i++){
        if(long.length<word1[i].length) long=word1[i];
    
    }
    return long
}
const str1="this is a sentense";
console.log(longword(str1));