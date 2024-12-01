let hamburgerIcon = document.getElementById('hamburger-icon');
let mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click', () => {
    if (mobileNav.style.display === 'block'){
        mobileNav.style.display = 'none'
    }

    else {
        mobileNav.style.display = 'block'
    }
    
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024){
        mobileNav.style.display = 'none'
    }
    
})