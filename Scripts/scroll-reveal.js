ScrollReveal({
     reset: true,
     duration: 600,
     distance: '100px',
     delay: 100 
    });

ScrollReveal().reveal('#allWel3',{origin: 'left'});
ScrollReveal().reveal('.boxes',{origin: 'right'});
ScrollReveal().reveal('#projectsIntroId');
ScrollReveal().reveal('#headerForProjectId',{delay:1});
ScrollReveal().reveal('#headerForAboutSectionId',{origin:'right'});
ScrollReveal().reveal('#introForAboutSecId',{delay: 400});
ScrollReveal().reveal('#aboutAllBoxesId',{origin:'left', delay:400});
ScrollReveal().reveal('#Contacts-Header',{delay: 300,origin:'left'});
ScrollReveal().reveal('#landing-hi',{origin:'left'});
ScrollReveal().reveal('#landing-name',{origin:'right',delay: 500});
ScrollReveal().reveal('.welcomePage .short-des-part',{distance:'30px',origin:'top',delay: 300});
ScrollReveal().reveal('.moto-part',{origin: 'bottom'});
ScrollReveal().reveal('.skill-section',{origin: 'right'});

const navbar= document.getElementById('navId')
let scrollTop = window.scrollY;
    window.addEventListener('scroll',function(){
        if(scrollTop < this.window.scrollY)
        {
            navbar.style.top = '-100px';
        }
        else{
            navbar.style.top="1%";
        }
        scrollTop =window.scrollY;
    })