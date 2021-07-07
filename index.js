const navSlide=()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li")

burger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active");
    navLinks.forEach((link,index)=>{
        if (link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.3}s`
        }
        
    });
    })

    // Animate link   
}
navSlide();

 const navDesign=()=>{
     const text=document.querySelector(".logo-text")
     text.addEventListener("mouseover",()=>{
         if(text.innerHTML==="A designer"){
             text.innerHTML="Aniket Jha"
            
         }
         else{
             text.innerHTML="A designer"
         }
         
     })
 }

navDesign();

function lightMode() {
  var element = document.body;
  var modeTitle=document.querySelector("#dark-mode h4")
  element.classList.toggle("light-mode");
  if(modeTitle.innerHTML==="Dark Mode"){
             modeTitle.innerHTML="Light Mode"
            
         }
         else{
             modeTitle.innerHTML="Dark Mode"
         }

}