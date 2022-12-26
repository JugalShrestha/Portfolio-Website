const rightSide= document.getElementById('main-section-id')
const leftSide= document.getElementById('menu-section-id')
const mobileSide= document.getElementById('mobile-section-id')
const menuPc= document.getElementById('menu-opener-pc-id')
var width= window.innerWidth;
if(width<980)
{
    menuPc.style.display="none";
    leftSide.style.display="none";
    rightSide.style.display="none";
    mobileSide.style.display="flex";
    mobileSide.style.overflow="auto";
}
else{
    menuPc.style.display="flex";
    rightSide.style.display="flex";
    leftSide.style.display="flex";
    mobileSide.style.display="none";
}