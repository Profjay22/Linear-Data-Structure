function distinct (set1, set2){
let distinctElement1 = []  
let distinctElement2 = [];
  for(let i=0; i<set1.length; i++ ){
    if(!set2.includes(set1[i])){    
      distinctElement1.push(set1[i]);
  }
  
}
 for(let i=0; i<set2.length; i++ ){
    if(!set1.includes(set2[i])){    
      distinctElement2.push(set2[i]);
  }
  
}
let sum1 = distinctElement1.reduce(function(a,b){
  return a+b;
})
let sum2 = distinctElement2.reduce(function(a,b){
  return a+b;
})


return sum1+sum2;
}

console.log(distinct([12, 13, 6, 10],[13, 10, 16, 15]));