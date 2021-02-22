function menuToggle(){
    let menuArea = document.getElementById("menu-open");
    
    if(menuArea.style.display == "block") {
        menuArea.style.display = "none";
    } else {
        menuArea.style.display = "block";
    }

}