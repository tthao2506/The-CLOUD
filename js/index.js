// Detect scroll direction
let scrollPosition = window.scrollY;
let scrollUp = true;

window.addEventListener('scroll', function() {
  // Update scroll position
  let newScrollPosition = window.scrollY;

  // Check if scrolling up or down
  if (newScrollPosition > scrollPosition) {
    scrollUp = true;
  } else {
    scrollUp = false;
  }

  scrollPosition = newScrollPosition;

  // Hide header on scroll up
  if (scrollUp) {
    document.querySelector('.header').style.visibility = 'hidden';
  } else {
    document.querySelector('.header').style.visibility = 'visible';
  }
});
