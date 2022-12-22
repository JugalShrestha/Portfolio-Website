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

mobileMenuButton.addEventListener("click",function(){
    mobileMenuOverlay.style.display="flex";
    mobileMenuButton.style.display="none";

    mobileHomeOverlay.style.display="none";
    mobileProjectsOverlay.style.display="none";
    mobileContactsOverlay.style.display="none";
    mobileAboutOverlay.style.display="none";
})

mobileHomeButton.addEventListener("click",function(){
    mobileMenuOverlay.style.display="none";
    mobileMenuButton.style.display="flex";

    mobileHomeOverlay.style.display="flex";
})

mobileAboutButton.addEventListener("click",function(){
    mobileMenuOverlay.style.display="none";
    mobileMenuButton.style.display="flex";

    mobileAboutOverlay.style.display="flex";
})

mobileProjectsButton.addEventListener("click",function(){
    mobileMenuOverlay.style.display="none";
    mobileMenuButton.style.display="flex";

    mobileProjectsOverlay.style.display="flex";
})

mobileContactsButton.addEventListener("click",function(){
    mobileMenuOverlay.style.display="none";
    mobileMenuButton.style.display="flex";

    mobileContactsOverlay.style.display="flex";
})

