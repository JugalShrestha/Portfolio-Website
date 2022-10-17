
const signs= document.querySelectorAll('.screen-signs-decoration');
window.addEventListener('mousemove',parallax);

function parallax(){
    var rate= 250;
    var e= window.event;
   
    signs.forEach(
        (sign) =>{
            var speed= sign.getAttribute('data-value');
            var posX= ((e.clientX)*speed)/rate;
            var posY= ((e.clientY)*speed)/rate;
            sign.style.transform= 'translate('+posX+'px,'+posY+'px)';
        }
    )
}