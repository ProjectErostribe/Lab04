/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close'),


/* SHOW THIS */
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
});

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
});

/* HIDE THIS */
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
});   

/* REMOVE MENU */
const navLink = document.querySelectorAll('nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('selection[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav_menu a[href*=' + sectonId +']').classList.add('active')
        }else{
            document.querySelector('nav_menu a[href*=' + sectonId +']').classList.remove('active')
        }
    })
}