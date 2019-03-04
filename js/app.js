const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', _.throttle(addGreyBG, 20));

function addGreyBG() {
  if (window.scrollY > 5) {
    nav.classList.add('grey-bg');
  } else {
    nav.classList.remove('grey-bg');
  }
}
