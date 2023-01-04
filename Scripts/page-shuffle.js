const pageBtn= document.querySelectorAll('#nav-option-id');
const homePage= document.getElementById("home-context-id");
const projectPage= document.getElementById("projects-context-id");
const aboutPage= document.getElementById("about-context-id");
const contactPage= document.getElementById("contacts-context-id");

pageBtn.forEach(function(page,index){
    page.addEventListener("click",function(){
        console.log(index);
        if(index==0)
        {
            homePage.scrollIntoView();
        }
        else if(index==1)
        {
            aboutPage.scrollIntoView();
        }
        else if(index==2)
        {
            projectPage.scrollIntoView();
        }
        else if(index==3)
        {
            contactPage.scrollIntoView();
        }
    })
})