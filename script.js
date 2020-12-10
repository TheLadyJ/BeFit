 /*PADAJUĆI MENI*/
 
/*Sat koji otkucava kao prva stavka menija*/
 function display_t() {
     mytime = setTimeout('display_dt()', 1000)
 }

 function display_dt() {
     var x = new Date()
     document.getElementById('dt').innerHTML = x.toLocaleTimeString();
     display_t();
 }

 /* Funkcije za ikonice padajućeg menija*/

 let menuIcon = document.getElementById("menu");
 let closeIcon = document.getElementById("close");

 /*Ova f-ja se poziva kada se klikne na standardnu ikonicu menija za njegovo otvaranje*/
 function showClose() {
     closeIcon.style.display = "flex";
     menuIcon.style.display = "none";
     closeIcon.style.visibility = "visible";
     toggleMenu();
 }

 /*Ova f-ja se poziva kada se klikne na ikonicu za zatvaranje padajućeg menija*/
 function showMenu() {
     menuIcon.style.display = "flex";
     closeIcon.style.visibility = "hidden";
     menuIcon.style.visibility = "visible";
     toggleMenu();
 }

 /*Ovde se menja klasa nav-a (koji ima id "options")*/
 function toggleMenu() {
     /* Zbog promene klase nav-a će se koristiti drugačija CSS svojstva menija*/
     let x = document.getElementById("options");
     if (x.className === "regular") {
         x.className = "dropDown";
     } else {
         x.className = "regular";
     }
 }



 /*CENOVNIK*/
 var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
 var tabPanels = document.querySelectorAll(".tabContainer .tabPanel ");

 function showPanel(panelIndex, colorCode) {
     tabButtons.forEach(function (node) {
         node.style.backgroundColor = "";
         node.style.color = "";
     });
     tabButtons[panelIndex].style.backgroundColor = colorCode;
     tabButtons[panelIndex].style.color = "white";

     tabPanels.forEach(function (node) {
         node.style.display = "none";
     });
     tabPanels[panelIndex].style.display = "block";
     tabPanels[panelIndex].style.backgroundColor = colorCode;

 }
 showPanel(0, '#f44336');