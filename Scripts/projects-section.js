const projects= document.querySelectorAll('#project-id')
const projectNo= document.getElementById('projects-number-display-id')

projects.forEach(function(project,index){
    project.style.zIndex="-"+index+"";
        project.style.transform="translateX("+index*2+"vh)";
});
var projectCount=4;
const nextBtn= document.getElementById('projects-next-btn-id')
const prevBtn= document.getElementById('projects-prev-btn-id')
var check=0;
nextBtn.addEventListener("click",function(){
    if(check<projectCount)
    {
        check++;
        projects[check].style.zIndex=""+check+"";
        projectNo.innerHTML=""+(check+1)+"";
        for(let i=check-1;i>=0;i--)
        {
            projects[i].style.zIndex=""+i+"";
        }
    }
})
prevBtn.addEventListener("click",function(){
    if(check>0)
    {
        check--;
        projects[check].style.zIndex="1";
        projectNo.innerHTML=""+(check+1)+"";
        for(let i=0;i<projectCount;i++)
        {
            if(i==check)
            {
                continue;
            }
            else
            projects[i].style.zIndex="-"+i+"";
        }
    }
})