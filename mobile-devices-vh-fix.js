const setViewportProperty = () => {
  let vh = window.innerHeight * 0.01;
  document.querySelector(main).style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportProperty);
window.addEventListener('orientationchange', setViewportProperty);
setViewportProperty();