document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });
  }

  const revealItems = document.querySelectorAll(
    ".intro-section, .living-split, .feature-card, .page-card, .quote-band, .diet-showcase, .diet-rhythm, .footer"
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      event.preventDefault();
      document.body.classList.add("page-fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 220);
    });
  });
});