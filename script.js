 /*PADAJUĆI MENI*/

 /*vreme
 var dt = new Date();
 dt.refresh=1000;
 document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();*/

 function display_t() {
     mytime = setTimeout('display_dt()', 1000)
 }

 function display_dt() {
     var x = new Date()
     document.getElementById('dt').innerHTML = x.toLocaleTimeString();
     display_t();
 }

 let menuIcon = document.getElementById("menu");
 let closeIcon = document.getElementById("close");

 /*Ova f-ja se poyiva kada se klikne na standardnu ikonicu menija*/
 function showClose() {
     /*Ovim se aktivira način na koji se close ikonica vidi*/
     closeIcon.style.display = "flex";
     /*A pri tom se meni ikonica (tri vodoravne linije) više ne vidi*/
     menuIcon.style.display = "none";
     /*Ovim se aktivira vidljivost ikonice close*/
     closeIcon.style.visibility = "visible";
     toggleMenu();
 }

 function showMenu() {
     /*Ovim se aktivira način na koji se meni ikonica vidi*/
     menuIcon.style.display = "flex";
     /*A pri tom se close ikonica (iksić) više ne vidi*/
     closeIcon.style.visibility = "hidden";
     /*Ovim se aktivira vidljivost ikonice meni*/
     menuIcon.style.visibility = "visible";
     toggleMenu();
 }

 /*Ovde se menja klasa nav-a (koji ima id "options") kako bi se opcije opadajućeg menija prikazale odnosno sakrile*/
 function toggleMenu() {
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