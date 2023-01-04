const navBar= document.getElementById('nav-bar-id');
var width= window.innerWidth;
if(width<980)
{
    navBar.style.top="0%";
    navBar.style.left="0%";
    navBar.style.right="0%";
    navBar.style.padding="2vh";
    navBar.style.display="flex";
    navBar.style.alignItems="center";
    navBar.style.justifyContent="center";
    navBar.style.background="var(--s-color)";
    navBar.style.boxShadow="0 0 1vh var(--shadow)";
    
}