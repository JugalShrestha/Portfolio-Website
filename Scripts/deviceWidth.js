const s= document.getElementById('navId-mobile')
const sideArrowP= document.getElementById('sideArrow-mobileP')
const sideArrowA= document.getElementById('sideArrow-mobileA')
    var width= window.innerWidth;
    if(width>820)
    {
        s.style.display="none"
        sideArrowP.style.display="none";
        sideArrowA.style.display="none";
    }
    else{
        s.style.display ="flex";
        sideArrowP.style.visibility="visible";
        sideArrowA.style.visibility="visible";
    }