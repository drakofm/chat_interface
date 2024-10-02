function adjustVh() {
  document.querySelector('main').style.setProperty('--vh', `${window.innerHeight}px`);
}

adjustVh();
window.addEventListener('orientationchange', adjustVh);