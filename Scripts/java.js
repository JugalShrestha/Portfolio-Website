
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
  overlay.classList.add('active')
}
function projectDisplayClose()
{
  const overlay= document.getElementById('projectOpen')
  overlay.classList.remove('active')
}

function openArts(){
  const overlay= document.getElementById('artOpen')
  overlay.classList.add('active')
}
function artDisplayClose()
{
  const overlay= document.getElementById('artOpen')
  overlay.classList.remove('active')
}

function openPhotos(){
  const overlay= document.getElementById('photoOpen')
  overlay.classList.add('active')
}
function photoDisplayClose()
{
  const overlay= document.getElementById('photoOpen')
  overlay.classList.remove('active')
}

function openGames(){
  const overlay= document.getElementById('gameOpen')
  overlay.classList.add('active')
}
function gameDisplayClose()
{
  const overlay= document.getElementById('gameOpen')
  overlay.classList.remove('active')
}