
function navOpen(){
  const nav = document.getElementById('navId')
  
  nav.classList.add('active')
}
function navClose(){
  const nav = document.getElementById('navId')

  nav.classList.remove('active')
}

function scrollTo1(){
  const destiny= document.querySelector('#allP1')

  destiny.scrollIntoView({behavior:"smooth",block:"start"});
}

function scrollTo2(){
  const destiny= document.getElementById('allA1')

  destiny.scrollIntoView({behavior:"smooth",block:"end"})
}

function scrollTo3(){
  const destiny= document.getElementById('allC1')

  destiny.scrollIntoView({behavior:"smooth",block:"end"})
}

function scrollTo4(){
  const destiny= document.getElementById('allWel1')

  destiny.scrollIntoView({behavior:"smooth",block:"end"})
}


function openAboutOl(){
  const overlay = document.getElementById('aboutOl')

  overlay.classList.add('active')
}
function closeAboutOl(){
  const overlay = document.getElementById('aboutOl')

  overlay.classList.remove('active')
}

function openContactOl(){
  const overlay = document.getElementById('contactOl')

  overlay.classList.add('active')
}
function closeContactOl(){
  const overlay = document.getElementById('contactOl')

  overlay.classList.remove('active')
}

function openProjects(){
  const overlay= document.getElementById('projectOpen')
  const screen=document.getElementById('box-screen')
  const goBack= document.getElementById('go-back')
  
  goBack.classList.add('active')
  overlay.classList.add('active')
  screen.classList.add('remove-menu')
}
function projectDisplayClose()
{
  const overlay= document.getElementById('projectOpen')
  const screen=document.getElementById('box-screen')
  const goBack= document.getElementById('go-back')
  
  goBack.classList.remove('active')
  overlay.classList.remove('active')
  screen.classList.remove('remove-menu')
  
  const overlay2= document.getElementById('artOpen')
  const screen2=document.getElementById('box-screen')
  
  overlay2.classList.remove('active')
  screen2.classList.remove('remove-menu')
}

function openArts(){
  const overlay= document.getElementById('artOpen')
  const screen=document.getElementById('box-screen')
  const goBack= document.getElementById('go-back')
  
  goBack.classList.add('active')
  overlay.classList.add('active')
  screen.classList.add('remove-menu')
}