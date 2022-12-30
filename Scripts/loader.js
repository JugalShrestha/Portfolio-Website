const loadingScreen= document.getElementById('loading-screen-id')
const circle= document.getElementById('loading-animation-id')

window.addEventListener("load",function(){
    loadingScreen.style.background="transparent";
    loadingScreen.style.zIndex="-1";
    circle.style.opacity="0";
})