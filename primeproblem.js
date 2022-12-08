let count=0;
let num=5


if(num <= 1)
{
    console.log("No");
    return;
}
   for(let i=2 ; i<num ; i++){
       if(num%i==1){
           count++
          break
       }
   }
   if(count==0){
       console.log("yes")
   }else{
       console.log("no")

   }
