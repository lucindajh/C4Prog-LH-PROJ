const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobile-nav');



window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024){
        hamburgerIcon.addEventListener('click', () => {
            if (mobileNav.style.display === 'block'){
                mobileNav.style.display = 'none'
            }
        
            else {
                mobileNav.style.display = 'block'
            }
            
        })
    }
    else {
        mobileNav.style.display = 'none'
    }
})