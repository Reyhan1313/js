let img = document.querySelector("img");
let dark=true;

function lightd(){
if(dark){
    document.body.style.backgroundColor="darkgray"; 
    img.setAttribute("src", "./light.png"); 
    dark=false;
}else{  
    document.body.style.backgroundColor="white"; 
    img.setAttribute("src", "./6714978.png");  
    dark=true;

}
}