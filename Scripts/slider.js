const projects= document.querySelectorAll('.boxesOfResult')
var counter= 0;

projects.forEach(
    (project,index) =>{
        project.style.left =''+(index * 100)+'%';
    }
)
const goPrev = () => {
    if(counter > 0)
    {
        counter--
        slideProject()
    }
   
}

const goNext = () => {
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