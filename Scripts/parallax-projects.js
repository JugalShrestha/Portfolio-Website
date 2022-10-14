const signP1= document.getElementById('screen-signsP-id-1')
const signP2= document.getElementById('screen-signsP-id-2')
const signP3= document.getElementById('screen-signsP-id-3')
const signP4= document.getElementById('screen-signsP-id-4')
const signP5= document.getElementById('screen-signsP-id-5')
const signP6= document.getElementById('screen-signsP-id-6')
const signP7= document.getElementById('screen-signsP-id-7')
const signP8= document.getElementById('screen-signsP-id-8')

const screenP=document.getElementById('allP1')

window.addEventListener('mousemove',parallaxP);

function parallaxP()
{
    var eP = window.event;
    var rateP= 500;

    const speedP1= signP1.getAttribute('data-value');
    var posX1P = ((eP.clientX)*speedP1)/rateP;
    var posY1P = ((eP.clientY)*speedP1)/rateP;
    signP1.style.transform= 'translate3d('+posX1P+'px,'+posY1P+'px,0)';

    
    const speedP2= signP2.getAttribute('data-value');
    var posX2P = ((eP.clientX)*speedP2)/rateP;
    var posY2P = ((eP.clientY)*speedP2)/rateP;
    signP2.style.transform= 'translate3d('+posX2P+'px,'+posY2P+'px,0)';

    
    const speedP3= signP3.getAttribute('data-value');
    var posX3P = ((eP.clientX)*speedP3)/rateP;
    var posY3P = ((eP.clientY)*speedP3)/rateP;
    signP3.style.transform= 'translate3d('+posX3P+'px,'+posY3P+'px,0)';

    
    const speedP4= signP4.getAttribute('data-value');
    var posX4P = ((eP.clientX)*speedP4)/rateP;
    var posY4P = ((eP.clientY)*speedP4)/rateP;
    signP4.style.transform= 'translate3d('+posX4P+'px,'+posY4P+'px,0)';

    
    const speedP5= signP5.getAttribute('data-value');
    var posX5P = ((eP.clientX)*speedP5)/rateP;
    var posY5P = ((eP.clientY)*speedP5)/rateP;
    signP5.style.transform= 'translate3d('+posX5P+'px,'+posY5P+'px,0)';

    
    const speedP6= signP6.getAttribute('data-value');
    var posX6P = ((eP.clientX)*speedP6)/rateP;
    var posY6P = ((eP.clientY)*speedP6)/rateP;
    signP6.style.transform= 'translate3d('+posX6P+'px,'+posY6P+'px,0)';

    
    const speedP7= signP7.getAttribute('data-value');
    var posX7P = ((eP.clientX)*speedP7)/rateP;
    var posY7P = ((eP.clientY)*speedP7)/rateP;
    signP7.style.transform= 'translate3d('+posX7P+'px,'+posY7P+'px,0)';

    
    const speedP8= signP8.getAttribute('data-value');
    var posX8P = ((eP.clientX)*speedP8)/rateP;
    var posY8P = ((eP.clientY)*speedP8)/rateP;
    signP8.style.transform= 'translate3d('+posX8P+'px,'+posY8P+'px,0)';
}