const projects= document.querySelectorAll('#project-id')
const projectListName=document.querySelectorAll('.project-name');
const projectNo= document.getElementById('projects-number-display-id')
var distance=40;

projects.forEach(function(project,index){
    project.style.zIndex="-"+index;
});

//Total project count
var projectCount=projects.length;
//Buttons
const nextBtn= document.getElementById('projects-next-btn-id')
const prevBtn= document.getElementById('projects-prev-btn-id')
var check=0;
//For NExt Btn
nextBtn.addEventListener("click",function(){
    if(check==projectCount-1)
    {
        check=0;
    }
    else{
        check++;
    }
    projects[check].style.opacity="100%";
    projects[check].style.zIndex="1";
    projectListName[check].style.background="var(--p-color)";
    projectListName[check].style.color="var(--s-color)";
    projectNo.innerHTML=""+(check+1)+"/"+projectCount;
    for(let i=0;i<projectCount;i++)
    {
        if(i==check)
        {
            continue;
        }
        projects[i].style.opacity="0%";
        projects[i].style.zIndex="-1";
        projectListName[i].style.background="var(--s-color)";
        projectListName[i].style.color="var(--p-color)";
    }
})


//For Prev Btn
prevBtn.addEventListener("click",function(){
    if(check==0)
    {
        check=projectCount-1;
    }
    else
    {
        check--;
    }
    projects[check].style.opacity="100%";
    projects[check].style.zIndex="1";
    projectListName[check].style.background="var(--p-color)";
    projectListName[check].style.color="var(--s-color)";
    projectNo.innerHTML=""+(check+1)+"/"+projectCount;
    for(let i=0;i<projectCount;i++)
    {
        if(i==check)
        {
            continue;
        }
        projects[i].style.opacity="0%";
        projects[i].style.zIndex="-1";
        projectListName[i].style.background="var(--s-color)";
        projectListName[i].style.color="var(--p-color)";
    }
})

projectListName.forEach(function(projectName,index){
    projectName.addEventListener("click",function(){
        check=index;
        projects[index].style.opacity="100%";
        projects[index].style.zIndex="1";
        projectListName[index].style.background="var(--p-color)";
        projectListName[index].style.color="var(--s-color)";
        projectNo.innerHTML=""+(index+1)+"/"+projectCount;
        for(let i=0;i<projectCount;i++)
        {
            if(i==index)
            {
                continue;
            }
            projects[i].style.opacity="0%";
            projects[i].style.zIndex="-1";
            projectListName[i].style.background="var(--s-color)";
            projectListName[i].style.color="var(--p-color)";
        }
    })
})

//FOR MOBILE--------------------------------------------------------

const projectsM= document.querySelectorAll('#project-m-id')
const projectListNameM=document.querySelectorAll('.project-name-m');
const projectNoM= document.getElementById('projects-number-display-m-id')

projectsM.forEach(function(project,index){
    project.style.zIndex="-"+index;
});

//Buttons
const nextBtnM= document.getElementById('projects-next-btn-m-id')
const prevBtnM= document.getElementById('projects-prev-btn-m-id')
var checkM=0;
//For NExt Btn
nextBtnM.addEventListener("click",function(){
    if(checkM==projectCount-1)
    {
        checkM=0;
    }
    else{
        checkM++;
    }
    projectsM[checkM].style.opacity="100%";
    projectsM[checkM].style.zIndex="1";
    projectListNameM[checkM].style.background="var(--p-color)";
    projectListNameM[checkM].style.color="var(--s-color)";
    projectNoM.innerHTML=""+(checkM+1)+"/"+projectCount;
    for(let i=0;i<projectCount;i++)
    {
        if(i==checkM)
        {
            continue;
        }
        projectsM[i].style.opacity="0%";
        projectsM[i].style.zIndex="-1";
        projectListNameM[i].style.background="var(--s-color)";
        projectListNameM[i].style.color="var(--p-color)";
    }
})


//For Prev Btn
prevBtnM.addEventListener("click",function(){
    if(checkM==0)
    {
        checkM=projectCount-1;
    }
    else
    {
        checkM--;
    }
    projectsM[checkM].style.opacity="100%";
    projectsM[checkM].style.zIndex="1";
    projectListNameM[checkM].style.background="var(--p-color)";
    projectListNameM[checkM].style.color="var(--s-color)";
    projectNoM.innerHTML=""+(checkM+1)+"/"+projectCount;
    for(let i=0;i<projectCount;i++)
    {
        if(i==checkM)
        {
            continue;
        }
        projectsM[i].style.opacity="0%";
        projectsM[i].style.zIndex="-1";
        projectListNameM[i].style.background="var(--s-color)";
        projectListNameM[i].style.color="var(--p-color)";
    }
})

projectListNameM.forEach(function(projectName,index){
    projectName.addEventListener("click",function(){
        checkM=index;
        projectsM[index].style.opacity="100%";
        projectsM[index].style.zIndex="1";
        projectListNameM[index].style.background="var(--p-color)";
        projectListNameM[index].style.color="var(--s-color)";
        projectNoM.innerHTML=""+(index+1)+"/"+projectCount;
        for(let i=0;i<projectCount;i++)
        {
            if(i==index)
            {
                continue;
            }
            projectsM[i].style.opacity="0%";
            projectsM[i].style.zIndex="-1";
            projectListNameM[i].style.background="var(--s-color)";
            projectListNameM[i].style.color="var(--p-color)";
        }
    })
})