//const clickMeSign=document.getElementById('menu-opener-click-text-id')
const main= document.getElementById('main-section-id')
const menuOpener= document.getElementById('menu-opener-pc-id')
const menu= document.getElementById('menu-section-id')
const closeMenu= document.getElementById('menu-closer-pc-id')

//-----Start For opening the menu----------
//odd=is-open even=is-not-open
//Opened menu
menuOpener.addEventListener("click",function(){
    menuOpener.style.left="15%";
    menuOpener.style.bottom="10%";
    menuOpener.style.opacity="20%";
    menuOpener.style.zIndex="-1";
    menuOpener.style.transform="traslate(-15%,-10%)";

    menu.style.opacity="100%";
    menu.style.zIndex="2";

    main.style.left="15%";
    main.style.bottom="15%";
})
//Closed menu
closeMenu.addEventListener("click",function(){
    menu.style.opacity="0";
    menu.style.zIndex="-1";

    main.style.left="0";
    main.style.bottom="0";

    menuOpener.style.left="50%";
    menuOpener.style.bottom="1%";
    menuOpener.style.transform="translateX(-50%)";    
    menuOpener.style.opacity="100%";
    menuOpener.style.zIndex="2";
})
//--End for starting the menu-----------