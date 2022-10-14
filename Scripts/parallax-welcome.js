const sign1= document.getElementById('screen-signs-id-1')
const sign2= document.getElementById('screen-signs-id-2')
const sign3= document.getElementById('screen-signs-id-3')
const sign4= document.getElementById('screen-signs-id-4')
const sign5= document.getElementById('screen-signs-id-5')
const sign6= document.getElementById('screen-signs-id-6')

const screenW=document.getElementById('allWel1')

screenW.addEventListener('mousemove',parallax);

function parallax()
{
    var e = window.event;
    var rate= 50;

    const speed1= sign1.getAttribute('data-value');
    var posX1 = ((e.clientX)*speed1)/rate;
    var posY1 = ((e.clientY)*speed1)/rate;
    sign1.style.transform= 'translate3d('+posX1+'px,'+posY1+'px,0)';

    
    const speed2= sign2.getAttribute('data-value');
    var posX2 = ((e.clientX)*speed2)/rate;
    var posY2 = ((e.clientY)*speed2)/rate;
    sign2.style.transform= 'translate3d('+posX2+'px,'+posY2+'px,0)';

    
    const speed3= sign3.getAttribute('data-value');
    var posX3 = ((e.clientX)*speed3)/rate;
    var posY3 = ((e.clientY)*speed3)/rate;
    sign3.style.transform= 'translate3d('+posX3+'px,'+posY3+'px,0)';

    
    const speed4= sign4.getAttribute('data-value');
    var posX4 = ((e.clientX)*speed4)/rate;
    var posY4 = ((e.clientY)*speed4)/rate;
    sign4.style.transform= 'translate3d('+posX4+'px,'+posY4+'px,0)';

    
    const speed5= sign5.getAttribute('data-value');
    var posX5 = ((e.clientX)*speed5)/rate;
    var posY5 = ((e.clientY)*speed5)/rate;
    sign5.style.transform= 'translate3d('+posX5+'px,'+posY5+'px,0)';

    
    const speed6= sign1.getAttribute('data-value');
    var posX6 = ((e.clientX)*speed6)/rate;
    var posY6 = ((e.clientY)*speed6)/rate;
    sign6.style.transform= 'translate3d('+posX6+'px,'+posY6+'px,0)';
}