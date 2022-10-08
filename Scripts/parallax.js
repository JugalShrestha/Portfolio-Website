
const screen= document.getElementById('standingProud')
const screen2= document.getElementById('allWel3')
const screen3= document.getElementById('projectsIntroId')
const aboutH= document.getElementById('headerForAboutSectionId')
const aboutB= document.getElementById('aboutAllBoxesId')
const aboutI= document.getElementById('introForAboutSecId')
const hill1= document.getElementById('hill1')
const hill2= document.getElementById('hill2')
const projectH= document.getElementById('headerForProjectId')
const contactH= document.getElementById('Contacts-Header')

window.addEventListener('scroll',function(){
    var value = window.scrollY;

    screen.style.top = value *0.5+ 'px';
    screen2.style.top =value *0.7+'px';
    screen3.style.left= value *0.3+'px';
    aboutH.style.right= value *0.3+'px';
    aboutB.style.left= value *0.17+'px';
    aboutI.style.bottom= value *0.2+'px';
    hill1.style.top= value *1+ 'px';
    projectH.style.top= value *0.5+ 'px';
    //contactH.style.left= value *0.1+ 'px';
} )


