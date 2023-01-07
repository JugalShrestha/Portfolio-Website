const projectOpenBtn= document.querySelectorAll('#project-expand-id');
const projectOverlay= document.querySelectorAll('#project-expanded-id');
const projectCloseBtn= document.querySelectorAll('#project-close-btn-id');
const blackOverlay= document.getElementById('project-overlay-id');

projectOpenBtn.forEach(function(btn,index){
    btn.addEventListener("click",function(){
        projectOverlay[index].style.opacity="100%";
        projectOverlay[index].style.zIndex="3";
        blackOverlay.style.opacity="95%";
        blackOverlay.style.zIndex="2";
    })
})

projectCloseBtn.forEach(function(btn,index){
    btn.addEventListener('click',function(){
        projectOverlay[index].style.opacity="0";
        projectOverlay[index].style.zIndex="-1";
        blackOverlay.style.opacity="0";
        blackOverlay.style.zIndex="-1";
    })
})