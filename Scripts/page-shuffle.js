//Menu

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
    homeOverlay.style.zIndex="1";
    homeOverlay.style.opacity="100%";

    menu.style.opacity="0";
    menu.style.zIndex="-1";

    main.style.left="0";
    main.style.bottom="0";

    menuOpener.style.left="50%";
    menuOpener.style.bottom="2%";
    menuOpener.style.transform="translate(-50%,-2%)";    
    menuOpener.style.opacity="80%";
    menuOpener.style.zIndex="2";

    aboutOverlay.style.zIndex="-1";
    projectsOverlay.style.zIndex="-1";
    contactsOverlay.style.zIndex="-1";

    aboutOverlay.style.opacity="0";
    projectsOverlay.style.opacity="0";
    contactsOverlay.style.opacity="0";
});

aboutButton.addEventListener("click",function(){
    aboutOverlay.style.zIndex="1";
    aboutOverlay.style.opacity="100%";

    menu.style.opacity="0";
    menu.style.zIndex="-1";

    main.style.left="0";
    main.style.bottom="0";

    menuOpener.style.left="50%";
    menuOpener.style.bottom="2%";
    menuOpener.style.transform="translate(-50%,-2%)";    
    menuOpener.style.opacity="80%";
    menuOpener.style.zIndex="2";

    homeOverlay.style.zIndex="-1";
    projectsOverlay.style.zIndex="-1";
    contactsOverlay.style.zIndex="-1";

    homeOverlay.style.opacity="0";
    projectsOverlay.style.opacity="0";
    contactsOverlay.style.opacity="0";
});

projectsButton.addEventListener("click",function(){
    projectsOverlay.style.zIndex="1";
    projectsOverlay.style.opacity="100%";

    menu.style.opacity="0";
    menu.style.zIndex="-1";

    main.style.left="0";
    main.style.bottom="0";

    menuOpener.style.left="50%";
    menuOpener.style.bottom="2%";
    menuOpener.style.transform="translate(-50%,-2%)";    
    menuOpener.style.opacity="80%";
    menuOpener.style.zIndex="2";

    aboutOverlay.style.zIndex="-1";
    homeOverlay.style.zIndex="-1";
    contactsOverlay.style.zIndex="-1";

    aboutOverlay.style.opacity="0";
    homeOverlay.style.opacity="0";
    contactsOverlay.style.opacity="0";
});

contactsButton.addEventListener("click",function(){
    contactsOverlay.style.zIndex="1";
    contactsOverlay.style.opacity="100%";
   
    menu.style.opacity="0";
    menu.style.zIndex="-1";

    main.style.left="0";
    main.style.bottom="0";

    menuOpener.style.left="50%";
    menuOpener.style.bottom="2%";
    menuOpener.style.transform="translate(-50%,-2%)";    
    menuOpener.style.opacity="80%";
    menuOpener.style.zIndex="2";

    aboutOverlay.style.zIndex="-1";
    projectsOverlay.style.zIndex="-1";
    homeOverlay.style.zIndex="-1";

    aboutOverlay.style.opacity="0";
    projectsOverlay.style.opacity="0";
    homeOverlay.style.opacity="0";
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

