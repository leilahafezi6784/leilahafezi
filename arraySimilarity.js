function isequal(array1,array2){
    if(array1==array2){
        return true;
    }
    if(array1.length !== array2.length){
        return false;
    }
    for (let i=0;i< array1.length;i++){
        if(array1[i]!==array2[i]){
            return false;
        }
    }
    return true;
}
const a1=[12,10,8,20,5];
const a2=[12,10,8,20,5];
console.log(isequal(a1,a2));