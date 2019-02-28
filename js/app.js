const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', addGreyBG);

function addGreyBG() {
  if (window.scrollY > 5) {
    nav.classList.add('grey-bg');
  } else {
    nav.classList.remove('grey-bg');
  }
}
