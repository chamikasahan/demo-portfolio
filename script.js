const counters = document.querySelectorAll(".counter");

const options = {
  root: null,
  threshold: 0.5, // Trigger when half of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      target.innerText = "0";
      const updateCounter = () => {
        const targetCount = +target.getAttribute("data-target");
        const currentCount = +target.innerText;
        const increment = targetCount / 200;
        if (currentCount < targetCount) {
          target.innerText = `${Math.ceil(currentCount + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          target.innerText = targetCount;
        }
      };
      updateCounter();
      observer.unobserve(target); // Stop observing once the section is intersecting
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});

// progress bar code

// scroll to top button code
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").classList.add("show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

