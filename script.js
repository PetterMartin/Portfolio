const performanceBoxes = document.querySelectorAll('.performance-box');
const imageBoxes = document.querySelectorAll('.image-box');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const offset = 200; // Adjust the offset as needed
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offset
  );
}

function handleScroll() {
    performanceBoxes.forEach((box, index) => {
      if (isInViewport(box)) {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
        box.style.transitionDelay = `${index * 0.4}s`;
      }
    });
  
    imageBoxes.forEach((imageBox, index) => {
      if (isInViewport(imageBox)) {
        imageBox.style.opacity = 1;
        imageBox.style.transform = 'translateY(0)';
        imageBox.style.transitionDelay = `${index * 0.4}s`;
      }
    });
  }

window.addEventListener('scroll', handleScroll);

handleScroll();

// Smooth scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };
  
  // Handle click events on smooth-scroll links
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      smoothScroll(href);
    });
  });




