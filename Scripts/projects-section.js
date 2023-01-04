const projectOpenBtn= document.querySelectorAll('#project-expand-id');
const projectOverlay= document.querySelectorAll('#project-expanded-id');
const projectCloseBtn= document.querySelectorAll('#project-close-btn-id');

projectOpenBtn.forEach(function(btn,index){
    btn.addEventListener("click",function(){
        projectOverlay[index].style.opacity="100%";
        projectOverlay[index].style.zIndex="3";
    })
})

projectCloseBtn.forEach(function(btn,index){
    btn.addEventListener('click',function(){
        projectOverlay[index].style.opacity="0";
        projectOverlay[index].style.zIndex="-1";
    })
})