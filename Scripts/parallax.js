
const screen= document.getElementById('standingProud')
const screen2= document.getElementById('allWel3')
const screen3= document.getElementById('projectsIntroId')
const projectH= document.getElementById('headerForProjectId')


window.addEventListener('scroll',function(){
    var value = window.scrollY;

    screen.style.top = value *0.5+ 'px';
    screen2.style.top =value *0.7+'px';
    screen3.style.left= value *0.3+'px';
    projectH.style.top= value *0.5+ 'px';
} )


