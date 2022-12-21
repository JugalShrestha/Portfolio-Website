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
const mobileMenuButton= document.getElementById('nav-m-id')
const mobileHomeButton= document.getElementById('menu-m-home')
const mobileAboutButton= document.getElementById('menu-m-about')
const mobileProjectsButton= document.getElementById('menu-m-projects')
const mobileContactsButton= document.getElementById('menu-m-contacts')

//For Overlays in Mobile
const mobileMenuOverlay= document.getElementById('menu-m-id')
const mobileHomeOverlay= document.getElementById('home-context-m-id')
const mobileProjectsOverlay= document.getElementById('projects-context-m-id')
const mobileContactsOverlay= document.getElementById('contacts-context-m-id')
const mobileAboutOverlay= document.getElementById('about-context-m-id')

homeButton.addEventListener("click",function(){
    aboutOverlay.style.zIndex="0";
    homeOverlay.style.zIndex="1";
    projectsOverlay.style.zIndex="0";
    contactsOverlay.style.zIndex="0";
});

aboutButton.addEventListener("click",function(){
    aboutOverlay.style.zIndex="1";
    homeOverlay.style.zIndex="0";
    projectsOverlay.style.zIndex="0";
    contactsOverlay.style.zIndex="0";
});

projectsButton.addEventListener("click",function(){
    aboutOverlay.style.zIndex="0";
    homeOverlay.style.zIndex="0";
    projectsOverlay.style.zIndex="1";
    contactsOverlay.style.zIndex="0";
});

contactsButton.addEventListener("click",function(){
    aboutOverlay.style.zIndex="0";
    homeOverlay.style.zIndex="0";
    projectsOverlay.style.zIndex="0";
    contactsOverlay.style.zIndex="1";
});

//For Mobile Menu

mobileMenuButton.addEventListener("click",function(){
    mobileMenuOverlay.style.zIndex="1";
    mobileMenuButton.style.zIndex="0";

    mobileHomeOverlay.style.zIndex="0";
    mobileProjectsOverlay.style.zIndex="0";
    mobileContactsOverlay.style.zIndex="0";
    mobileAboutOverlay.style.zIndex="0";
})

mobileHomeButton.addEventListener("click",function(){
    mobileMenuOverlay.style.zIndex="0";
    mobileMenuButton.style.zIndex="2";

    mobileHomeOverlay.style.zIndex="1";
})

mobileAboutButton.addEventListener("click",function(){
    mobileMenuOverlay.style.zIndex="0";
    mobileMenuButton.style.zIndex="2";

    mobileAboutOverlay.style.zIndex="1";
})

mobileProjectsButton.addEventListener("click",function(){
    mobileMenuOverlay.style.zIndex="0";
    mobileMenuButton.style.zIndex="2";

    mobileProjectsOverlay.style.zIndex="1";
})

mobileContactsButton.addEventListener("click",function(){
    mobileMenuOverlay.style.zIndex="0";
    mobileMenuButton.style.zIndex="2";

    mobileContactsOverlay.style.zIndex="1";
})

