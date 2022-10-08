const hoverer1= document.getElementById('allP1')
const activeL1= document.getElementById('allPLink')

const hoverer2= document.getElementById('allA1')
const activeL2= document.getElementById('allALink')

const hoverer3= document.getElementById('allC1')
const activeL3= document.getElementById('allCLink')

const hoverer4= document.getElementById('allWel1')

//For Projects Links
hoverer1.addEventListener("mouseover",active1,false);
hoverer1.addEventListener("mouseout",remove1,false);

function active1(){
    activeL1.style.background= "white";
}
function remove1(){
    activeL1.style.background="transparent";
}

//For About Links
hoverer2.addEventListener("mouseover",active2,false);
hoverer2.addEventListener("mouseout",remove2,false);

function active2(){
    activeL2.style.background="white";
}
function remove2(){
    activeL2.style.background="transparent";
}


//For Contact Links
hoverer3.addEventListener("mouseover",active3,false);
hoverer3.addEventListener("mouseout",remove3,false);

function active3(){
    activeL3.style.background="white";
}
function remove3(){
    activeL3.style.background="transparent";
}

