document.querySelector("#open-menu").addEventListener("click",()=>{
    let icon= document.querySelector(".menu-icon");
    let menu= document.querySelector(".header-mobile-menu");
    let overlay=document.querySelector(".overlay");
    if (icon.classList.contains('rotate')) {
        icon.classList.remove('rotate');
        menu.classList.remove("header-mobile-menu-open")
        overlay.classList.remove("overlay-open");
      } else {
        icon.classList.add('rotate');
        menu.classList.add("header-mobile-menu-open")
        overlay.classList.add("overlay-open");
      }
}
)


