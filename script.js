function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuTrigger = document.querySelector('.menu-trigger');
    menu.classList.toggle('active');
    menuTrigger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var navIcon1 = document.getElementById('nav-icon1');

    navIcon1.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});

const header = document.querySelector('header');

// Function to update header style based on scroll position
function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Adjust the header height based on the scroll position
    if (scrollPosition > 0) {
        header.style.top = Math.max(0 - scrollPosition, -43) + 'px';
    } else {
        // Return to the initial size when at the top
        header.style.top = '0px'; // Set to the initial height
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// stick the footer to the bottom of the page