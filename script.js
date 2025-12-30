gsap.registerPlugin(ScrollTrigger);

const follower = document.querySelector('.mouse-follower');
window.addEventListener('mousemove', (e) => {
  gsap.to(follower, {
    x: e.clientX,
    y: e.clientY,
    duration: 1.7,
    ease: "power2.out"
  });
});

// Use a more reliable trigger for bottom elements
gsap.utils.toArray('.text-animate').forEach((el) => {
  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 95%", // triggers closer to the bottom of the viewport
      toggleActions: "play reverse play reverse"
    }
  });
});

// Initialize Smooth Scrollbar
Scrollbar.init(document.querySelector('.scrollable'), {
  damping: 0.1
});

// Refresh ScrollTrigger after scrollbar init
setTimeout(() => {
  ScrollTrigger.refresh();
}, 300);