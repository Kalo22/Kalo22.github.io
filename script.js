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

function resizePhoto() {
    const photo = document.getElementById('dynamicPhoto');
    const img = photo.querySelector('img');
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const newHeight = window.innerWidth / aspectRatio;
  
    photo.style.height = newHeight + 'px';
  }
  
  // Call the function on window resize
  window.addEventListener('resize', resizePhoto);
  
  // Call the function on page load
  window.addEventListener('load', resizePhoto);