 let menuIcon = document.getElementById("menu");
 let closeIcon = document.getElementById("close");
 let dropMenu = document.getElementsByClassName("dropDown");

 function showClose() {
    closeIcon.style.display = "flex";
     menuIcon.style.display = "none";
     closeIcon.style.visibility = "visible";
    toggleMenu();
 }

 function showMenu(){
    menuIcon.style.display = "flex";
    closeIcon.style.visibility = "hidden";
    menuIcon.style.visibility = "visible";
    toggleMenu();
 }

 function toggleMenu(){
     let x = document.getElementById("options");
     if(x.className==="regular"){
         x.className ="dropDown";
     }
     else{
         x.className="regular";
     }
 }
 var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel ");

function showPanel(panelIndex,colorCode){
    tabButtons.forEach(function(node) {
        node.style.backgroundColor="";
       node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";

    tabPanels.forEach(function(node) {
       node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
    
}
showPanel(0,'#f44336');


