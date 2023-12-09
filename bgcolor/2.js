
 
     function bgcolor(){  
    let  randomNUM=Math.floor(Math.random()*101);  
if(randomNUM > 90){ 
   document.body.style.backgroundColor="green"; 
   alert("good job = "+randomNUM)
} 
else if(randomNUM > 60){
   document.body.style.backgroundColor="yellow"; 
   alert("pass = "+randomNUM)

} 
else{ 
   document.body.style.backgroundColor="red"; 
   alert("failed = "+randomNUM)

}  
return randomNUM;

     } 
    