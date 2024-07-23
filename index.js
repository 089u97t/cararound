const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// $(document).ready(function() {
//     $('.hero-content').fadeIn(1500); // Fade in animation for the hero content
//     $('.work-experience').slideDown(1500); // Slide down animation for the work experience section
// });



window.addEventListener('resize', function() {
    var marqueeContainer = document.querySelector('.marquee-container');
    var marquee = document.querySelector('.marquee');
    marquee.style.width = marqueeContainer.offsetWidth + 'px';
  });

  const privacyPolicy = document.getElementById('privacy-policy');

// Pause animation when end of text is reached
privacyPolicy.addEventListener('animationiteration', () => {
  const computedStyle = window.getComputedStyle(privacyPolicy, '::after');
  if (computedStyle.width === '100%') {
    privacyPolicy.style.animationPlayState = 'paused';
  }
});


// Create a function to handle the fading animation
function fadeOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class based on the target element
      if (entry.target.classList.contains('text')) {
        entry.target.classList.add('fade-in-right');
      } else if (entry.target.classList.contains('graphic')) {
        entry.target.classList.add('fade-in-left');
      } else if (entry.target.classList.contains('animated-button')) {
        entry.target.classList.add('fade-in-above');
      }
      // Unobserve the target to ensure the animation happens only once
      observer.unobserve(entry.target);
    }
  });
}

// Create a new Intersection Observer
// const observer = new IntersectionObserver(fadeOnScroll, {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5  // Set the threshold as per your requirement
// });

// // Observe the target elements
// observer.observe(document.querySelector('.text'));
// observer.observe(document.querySelector('.graphic'));
// observer.observe(document.querySelector('.animated-button'));


// let lastScrollTop = 0;
// window.addEventListener('scroll', function() {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//   if (currentScroll > lastScrollTop) {
//     // Scrolling down
//     // Remove animation classes if needed
//   } else {
//     // Scrolling up
//     // Add animation classes to trigger the fade-in effect
//     observer.observe(document.querySelector('.text'));
//     observer.observe(document.querySelector('.graphic'));
//     observer.observe(document.querySelector('.animated-button'));
//   }
//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// }, false);
function scrollUp(columnId) {
  const column = document.getElementById(columnId);
  column.scrollBy({ top: -100, behavior: 'smooth' });
}

function scrollDown(columnId) {
  const column = document.getElementById(columnId);
  column.scrollBy({ top: 100, behavior: 'smooth' });
}