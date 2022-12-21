const rightSide= document.getElementById('right-section-id')
const leftSide= document.getElementById('left-section-id')
const mobileSide= document.getElementById('mobile-section-id')
var width= window.innerWidth;
if(width<980)
{
    leftSide.style.display="none";
    rightSide.style.display="none";
    mobileSide.style.display="flex";
    mobileSide.style.overflow="auto";
}
else{
    rightSide.style.display="flex";
    leftSide.style.display="flex";
    mobileSide.style.display="none";
}