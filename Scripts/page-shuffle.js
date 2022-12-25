//For Buttons in pc
const homeButton= document.getElementById('menu-home')
const aboutButton= document.getElementById('menu-about')
const projectsButton= document.getElementById('menu-projects')
const contactsButton= document.getElementById('menu-contacts')

//FOr Overlays in pc
const projectsOverlay= document.getElementById('projects-context-id')
const contactsOverlay= document.getElementById('contacts-context-id')
const homeOverlay= document.getElementById('home-context-id')
const aboutOverlay= document.getElementById('about-context-id')

//For Buttons in Mobile
const mobileHomeButton= document.getElementById('menu-m-home')
const mobileAboutButton= document.getElementById('menu-m-about')
const mobileProjectsButton= document.getElementById('menu-m-projects')
const mobileContactsButton= document.getElementById('menu-m-contacts')

//For Overlays in Mobile
const mobileHomeOverlay= document.getElementById('home-context-m-id')
const mobileProjectsOverlay= document.getElementById('projects-context-m-id')
const mobileContactsOverlay= document.getElementById('contacts-context-m-id')
const mobileAboutOverlay= document.getElementById('about-context-m-id')

homeButton.addEventListener("click",function(){
    aboutOverlay.style.display="none";
    homeOverlay.style.display="flex";
    projectsOverlay.style.display="none";
    contactsOverlay.style.display="none";
});

aboutButton.addEventListener("click",function(){
    aboutOverlay.style.display="flex";
    homeOverlay.style.display="none";
    projectsOverlay.style.display="none";
    contactsOverlay.style.display="none";
});

projectsButton.addEventListener("click",function(){
    aboutOverlay.style.display="none";
    homeOverlay.style.display="none";
    projectsOverlay.style.display="flex";
    contactsOverlay.style.display="none";
});

contactsButton.addEventListener("click",function(){
    aboutOverlay.style.display="none";
    homeOverlay.style.display="none";
    projectsOverlay.style.display="none";
    contactsOverlay.style.display="flex";
});

//For Mobile Menu

mobileHomeButton.addEventListener("click",function(){
    mobileHomeOverlay.style.opacity="100%";
    mobileHomeOverlay.style.zIndex="1";

    mobileAboutOverlay.style.zIndex="-1";
    mobileAboutOverlay.style.opacity="0";
    mobileContactsOverlay.style.zIndex="-1";
    mobileContactsOverlay.style.opacity="0";
    mobileProjectsOverlay.style.zIndex="-1";
    mobileProjectsOverlay.style.opacity="0";
})

mobileAboutButton.addEventListener("click",function(){
    mobileAboutOverlay.style.opacity="100%";
    mobileAboutOverlay.style.zIndex="1";

    mobileHomeOverlay.style.zIndex="-1";
    mobileHomeOverlay.style.opacity="0";
    mobileContactsOverlay.style.zIndex="-1";
    mobileContactsOverlay.style.opacity="0";
    mobileProjectsOverlay.style.zIndex="-1";
    mobileProjectsOverlay.style.opacity="0";
})

mobileProjectsButton.addEventListener("click",function(){
    mobileProjectsOverlay.style.opacity="100%";
    mobileProjectsOverlay.style.zIndex="1";

    mobileAboutOverlay.style.zIndex="-1";
    mobileAboutOverlay.style.opacity="0";
    mobileContactsOverlay.style.zIndex="-1";
    mobileContactsOverlay.style.opacity="0";
    mobileHomeOverlay.style.zIndex="-1";
    mobileHomeOverlay.style.opacity="0";
})

mobileContactsButton.addEventListener("click",function(){
    mobileContactsOverlay.style.opacity="100%";
    mobileContactsOverlay.style.zIndex="1";

    mobileAboutOverlay.style.zIndex="-1";
    mobileAboutOverlay.style.opacity="0";
    mobileHomeOverlay.style.zIndex="-1";
    mobileHomeOverlay.style.opacity="0";
    mobileProjectsOverlay.style.zIndex="-1";
    mobileProjectsOverlay.style.opacity="0";
})

