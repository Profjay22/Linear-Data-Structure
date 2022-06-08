function distinct (set1, set2){
  let hash = new Map();
  
  for(let i=0; i<set1.length; i++){
    
    if(hash.has(set1[i]))
      hash.set(set1[i], 1 + hash.get(set1[i]));

    else

    hash.set(set1[i],1)
  }
    for(let i=0; i<set2.length; i++){
    
    if(hash.has(set2[i]))
      hash.set(set2[i], 1+hash.get(set2[i]))
    
    else
      hash.set(set2[i],1)
    
  }
  
  
  sum = 0
  for(let value of hash){
    if(parseInt(value[1].toString()) == 1){
      sum = sum + parseInt(value[0].toString());
    }
    
  }
   return sum;
  
}

console.log(distinct([12, 13, 6, 10],[13, 10, 16, 15]))