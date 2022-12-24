const clickMeSign=document.getElementById('menu-opener-click-text-id')
const hoverMeSign=document.getElementById('menu-opener-hover-text-id')
const menuOpener= document.getElementById('menu-opener-id');
const menuList= document.getElementById('menu-list-id')

//-----Start For opening the menu----------
menuOpener.addEventListener("mouseover",function(){
    clickMeSign.style.display="flex";
    hoverMeSign.style.display="none";
})
menuOpener.addEventListener("mouseleave",function(){
    clickMeSign.style.display="none";
    hoverMeSign.style.display="flex";
    hoverMeSign.classList.add("menu-fade-in-animation");
})
//odd=is-open even=is-not-open
var check=1;
menuOpener.addEventListener("click",function(){
    //Is open
    menuList.style.display="flex";
    menuList.classList.add("menu-open-animation");
    menuOpener.addEventListener("mouseover",function(){
        clickMeSign.style.display="none";
        hoverMeSign.style.display="none";
    })
    menuOpener.addEventListener("mouseleave",function(){
        clickMeSign.style.display="none";
        hoverMeSign.style.display="none";
        hoverMeSign.classList.add("menu-fade-in-animation");

    })
    check++;
    //Is not open
    if(check%2!=0)
    {
        menuList.style.display="none";
        clickMeSign.style.display="flex";
        menuOpener.addEventListener("mouseover",function(){
            clickMeSign.style.display="flex";
            hoverMeSign.style.display="none";
            hoverMeSign.classList.add("menu-fade-in-animation");

        })
        menuOpener.addEventListener("mouseleave",function(){
            clickMeSign.style.display="none";
            hoverMeSign.style.display="flex";
            hoverMeSign.classList.add("menu-fade-in-animation");
        })
    }
})
//--End for starting the menu-----------