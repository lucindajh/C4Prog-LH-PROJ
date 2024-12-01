const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click', () => {
    if (mobileNav.style.display === 'block'){
        mobileNav.style.display = 'none'
    }

    else {
        mobileNav.style.display = 'block'
    }
    
})