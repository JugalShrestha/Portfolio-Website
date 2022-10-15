const projects= document.querySelectorAll('.boxesOfResultP')
var counter= 0;

projects.forEach(
    (project,index) =>{
        project.style.left =''+(index * 100)+'%';
    }
)
const goPrevP = () => {
    if(counter > 0)
    {
        counter--
        slideProject()
    }
   
}

const goNextP = () => {
    if(counter < 2)
    {
        counter++
        slideProject()
    }
}

const slideProject = () => {
    projects.forEach(
        (project) => {
            project.style.transform= 'translateX(-'+(counter*100)+'%)'
        }
    )
}

const projectsA= document.querySelectorAll('.boxesOfResultA')
var counterA= 0;
projectsA.forEach(
    (projectA,indexA) =>{
        projectA.style.left =''+(indexA * 100)+'%';
    }
)
const goPrevA = () => {
    if(counterA > 0)
    {
        counterA--
        slideProjectA()
    }
   
}

const goNextA = () => {
    if(counterA < 2)
    {
        counterA++
        slideProjectA()
    }
}

const slideProjectA = () => {
    projectsA.forEach(
        (projectA) => {
            projectA.style.transform= 'translateX(-'+(counterA*100)+'%)'
        }
    )
}