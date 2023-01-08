const navBar= document.getElementById('nav-bar-id');
const projectPhoto= document.querySelectorAll('#project-photo-id')
const projectPara= document.querySelectorAll('#project-paragraph-id')
const projectBioExpanded= document.querySelectorAll('#project-bio-expanded-id')
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
    navBar.style.boxShadow="0 0 2vh var(--shadow)";

    projectPhoto.forEach(function(project){
        project.style.width="100%";
    })
    projectPara.forEach(function(project){
        project.style.width="100%";
    })
    projectBioExpanded.forEach(function(project){
        project.style.width="90%";
    })
    
    // projectOverlay.style.top="0";
    // projectOverlay.style.bottom="0";
    // projectOverlay.style.right="0";
    // projectOverlay.style.left="0";
}