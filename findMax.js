function findmax(array){

    let max=array[0]
    for( let  i=1; i<array.length;i++)
    {
        if(array[i]>max)
        {
            max=array[i];
        }

    }
  return max;
}

const a=[12,1,8,20,5];
console.log(findmax(a));


