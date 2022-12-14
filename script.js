colorSetter=(event)=>{ 
    if(event!=undefined){
        if(event.target.classList.contains("easy"))
        {  
            if(!event.target.classList.contains("active"))
            {
            easy.classList.add("active");
            hard.classList.remove("active");
            }  
             if(!colorBoxContainer.classList.contains("easy"))
             {
            colorBoxContainer.classList.add("easy");
            
             }
             colorBoxContainer.classList.remove("hard");
        }
       if(event.target.classList.contains("hard")){
           if(!event.target.classList.contains("active"))
           {
               hard.classList.add("active");
               easy.classList.remove("active");
           } 
           if(!colorBoxContainer.classList.contains("hard"))
           {
           colorBoxContainer.classList.add("hard");
           colorBoxContainer.classList.remove("easy");
           }
        }
    }
    tryAgain.style.display="none";
    correct.style.display="none";
    var correctColor;
    var redValue=Math.floor(Math.random()*256);
    var greenValue=Math.floor(Math.random()*256);
    var blueValue=Math.floor(Math.random()*256);
    var correctColor={r:redValue,g:greenValue,b:blueValue};
    var correctColorBoxIndex=Math.floor(Math.random()*colorBoxes.length);
     
    var redValue=Math.floor(Math.random()*256);
    var greenValue=Math.floor(Math.random()*256);
    var blueValue=Math.floor(Math.random()*256);
    var correctColor={r:redValue,g:greenValue,b:blueValue};
    colorBoxes.forEach((colorBox)=>{
        
    let redValue=Math.floor(Math.random()*256);
    let greenValue=Math.floor(Math.random()*256);
    let blueValue=Math.floor(Math.random()*256);
    colorBox.style.backgroundColor=`rgb(${redValue},${greenValue},${blueValue})`;
    const title=document.querySelector(".title h1");
    title.innerHTML=`THE GREAT RGB(${redValue},${greenValue},${blueValue})`;
   

    });
    console.log(correctColorBoxIndex);
    correctColorBoxColor=`rgb(${correctColor.r}, ${correctColor.g},  ${correctColor.b})`;
    colorBoxes[correctColorBoxIndex].style.backgroundColor=correctColorBoxColor;
   colorBoxes.forEach((colorBox)=>{
      colorBox.addEventListener("click",(event)=>{   
          
    tryAgain.style.display="none";
    correct.style.display="none";   
         var backgroundColor=event.target.style.backgroundColor; 
         var onlyColor=backgroundColor.substring(4,backgroundColor.length-1);
        onlyColor=  onlyColor.split(",")



       if(onlyColor[0]==correctColor.r&&onlyColor[1]==correctColor.g&&onlyColor[2]==correctColor.b){
         correct.style.display="inline-block";
       }    
       else{
           tryAgain.style.display="inline-block";
           console.log(tryAgain.innerHTML);
       }
     });
   });
}
var colorBoxContainer=document.querySelector(".color-box-container");
 var colorBoxes=document.querySelectorAll(".color-box");
var tryAgain=document.querySelector(".try-again");
var correct=document.querySelector(".correct"); 
 var newColorBtn=document.querySelector(".new-color");
  window.onload=colorSetter();
  var easy=document.querySelector(".easy");
  var hard=document.querySelector(".hard");
newColorBtn.addEventListener("click",colorSetter);
easy.addEventListener("click",colorSetter);
hard.addEventListener("click",colorSetter);
