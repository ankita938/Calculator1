const display =document.getElementById("display")
const buttons=document.getElementById("buttons")

buttons.addEventListener("click",(event)=>{
    
    console.log(event.target.classList)
    if(event.target.innerHTML==="C"){
        display.value=""
    }
    else if(event.target.classList.contains("btn"))
    {
        display.value+=event.target.innerHTML;
    }
    else if(event.target.classList.contains("operator"))
    {
        let lastch=display.value[display.value.length-1];
        if(lastch==="+" || lastch==="-" || lastch==="*" || lastch==="/"){
      
            display.value=display.value.slice(0,-1)+ event.target.innerHTML;

        }
        else{
        display.value+=event.target.innerHTML;}
    

    }
       
    
    else  if(event.target.innerHTML==="="){
        if(display.value.length!==0) {
            try{
                display.value =eval(display.value)
            }catch(error){
                display.value ="This is a error"
            } }
    
          
        else {
            display.value=""
        }
        
    }
        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
       
})