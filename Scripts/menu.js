//const clickMeSign=document.getElementById('menu-opener-click-text-id')
const hoverMeSign=document.getElementById('menu-opener-hover-text-id')
const menuOpener= document.getElementById('menu-opener-id');
const menuList= document.getElementById('menu-list-id')
const closeMeSign= document.getElementById('menu-opener-close-text-id')

//-----Start For opening the menu----------
//odd=is-open even=is-not-open
//Inside menu
//Opened menu
menuOpener.addEventListener("mouseover",function(){
    hoverMeSign.style.opacity="0";
    closeMeSign.style.opacity="100%";
     menuList.style.opacity="100%";
     menuList.style.zIndex="1";
     menuList.style.rotate="0deg";
     menuList.style.scale="1";
})
//Closing menu
menuOpener.addEventListener("click",function(){
    hoverMeSign.style.opacity="100%";
    closeMeSign.style.opacity="0";
    menuList.style.opacity="0";
    menuList.style.zIndex="-1";
    menuList.style.rotate="45deg";
    menuList.style.scale="0";
})
//--End for starting the menu-----------