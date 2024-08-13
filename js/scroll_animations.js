// Amr Khaled's Code

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

let hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((ele) => observer.observe(ele));
