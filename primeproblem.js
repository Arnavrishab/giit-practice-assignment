let count=0;
let num=5
   for(let i=2 ; i<num ; i++){
       if(num%i==0){
           count++
          break
       }
   }
   if(count==0){
       console.log("No")
   }else{
       console.log("Yes")
   }
