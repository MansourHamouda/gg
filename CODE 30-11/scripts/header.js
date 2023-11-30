// Start of Header code 
let sections = document.querySelectorAll('section');
let menuLinks = document.querySelectorAll('.list');

function makeLinkActive(link) {
  // Remove 'active' class from all menu items
  menuLinks.forEach((oneLink) => {
    oneLink.classList.remove('activated');
  });

  // Add 'active' class to the clicked menu item
  link.classList.add('activated');
}

function onScroll() {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((currSection, index) => {
    let sectionId = currSection.getAttribute('id');
    let menuLink = document.querySelector(`.menu li a[href="#${sectionId}"]`);

    if ((currSection.offsetTop - 100) <= scrollPos && (currSection.offsetTop - 100) + currSection.offsetHeight > scrollPos) {
      makeLinkActive(menuLink);
    }
  });
}

makeLinkActive(document.querySelector('.menu li a[href="#home'));
window.addEventListener('scroll', onScroll);
// End of Header code

// Start of Hamburger code
let hamburgerMenu = document.querySelector('.js-menu-hamburger');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hamburger-menu-on');
});
// End of Hamburger code