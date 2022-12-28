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
    menuOpener.style.opacity="0%";
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

    if(clickerCheck==0 || clickerCheck==1)
    {
        homeOverlay.style.zIndex="1";
        homeOverlay.style.opacity="100%";
    
        main.style.left="0";
        main.style.bottom="0";
    
        menuOpener.style.left="2%";
        menuOpener.style.bottom="2%";
        menuOpener.style.transform="translate(-2%,-2%)";    
        menuOpener.style.opacity="80%";
        menuOpener.style.zIndex="2";
    
        aboutOverlay.style.zIndex="-1";
        projectsOverlay.style.zIndex="-1";
        contactsOverlay.style.zIndex="-1";
    
        aboutOverlay.style.opacity="0";
        projectsOverlay.style.opacity="0";
        contactsOverlay.style.opacity="0";
    }
    else if(clickerCheck==2)
    {
        aboutOverlay.style.zIndex="1";
        aboutOverlay.style.opacity="100%";
    
        main.style.left="0";
        main.style.bottom="0";
    
        menuOpener.style.left="2%";
        menuOpener.style.bottom="2%";
        menuOpener.style.transform="translate(-2%,-2%)";    
        menuOpener.style.opacity="80%";
        menuOpener.style.zIndex="2";
    
        homeOverlay.style.zIndex="-1";
        projectsOverlay.style.zIndex="-1";
        contactsOverlay.style.zIndex="-1";
    
        homeOverlay.style.opacity="0";
        projectsOverlay.style.opacity="0";
        contactsOverlay.style.opacity="0";
    }
    else if(clickerCheck==3)
    {
        projectsOverlay.style.zIndex="1";
        projectsOverlay.style.opacity="100%";
    
        main.style.left="0";
        main.style.bottom="0";
    
        menuOpener.style.left="2%";
        menuOpener.style.bottom="2%";
        menuOpener.style.transform="translate(-2%,-2%)";    
        menuOpener.style.opacity="80%";
        menuOpener.style.zIndex="2";
    
        aboutOverlay.style.zIndex="-1";
        homeOverlay.style.zIndex="-1";
        contactsOverlay.style.zIndex="-1";
    
        aboutOverlay.style.opacity="0";
        homeOverlay.style.opacity="0";
        contactsOverlay.style.opacity="0";
    }

    else if(clickerCheck==4)
    {
        contactsOverlay.style.zIndex="1";
        contactsOverlay.style.opacity="100%";

        main.style.left="0";
        main.style.bottom="0";

        menuOpener.style.left="2%";
        menuOpener.style.bottom="2%";
        menuOpener.style.transform="translate(-2%,-2%)";    
        menuOpener.style.opacity="80%";
        menuOpener.style.zIndex="2";

        aboutOverlay.style.zIndex="-1";
        projectsOverlay.style.zIndex="-1";
        homeOverlay.style.zIndex="-1";

        aboutOverlay.style.opacity="0";
        projectsOverlay.style.opacity="0";
        homeOverlay.style.opacity="0";
    }
})
//--End for starting the menu-----------