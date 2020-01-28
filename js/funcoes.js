function menuMobile() {
    let menu = document.querySelector("body");
    let link = document.querySelector("header div nav a");
    let icon = document.createElement("i");

    if (menu.classList != "menu-active") {
        icon.classList = "fas fa-caret-up";
        link.innerHTML = "FECHA ";
        link.append(icon);

        menu.classList = "menu-active";


    } else {
        icon.classList = "fas fa-caret-down";
        link.innerHTML = "MENU ";
        link.append(icon);
        menu.classList.remove("menu-active");
    }


}

function menuDropdown() {
    let link = document.querySelector(".nav-mobile ul li:nth-child(4) a");
    let btnMais = document.querySelector(".nav-mobile li ul");
    let icon = document.querySelector(".nav-mobile ul li:nth-child(4) i");

    console.log(link);
    if (btnMais.classList == "dropdown") {
        btnMais.classList.toggle("dropdown");

        icon.classList = "fas fa-caret-up";
        btnMais.style.display = "inline"
        link.append(icon);
        link.style.color = "#3bb4b4";

    } else {
        btnMais.classList.toggle("dropdown");
        btnMais.style.display = "none"

        icon.classList = "fas fa-caret-down";
        link.append(icon);
        link.style.color = "#fff";
    }
}

function menuToggle(){

    let icon = document.querySelector(".sub-header i");
    let subMenu = document.querySelector(".sub-header .submenu");
    
    if(!icon.classList.contains("active")){

        icon.classList.add("active");
        subMenu.style.display = "block";    
    }else{
        icon.classList.remove("active");
        subMenu.style.display ="none";
    }
  
}
dadsds