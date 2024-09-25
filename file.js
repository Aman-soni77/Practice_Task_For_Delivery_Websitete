document.addEventListener("DOMContentLoaded", function() {
  // Accordion functionality
  const accordions = document.querySelectorAll(".accordion-item_1");

  accordions.forEach((item) => {
      const title = item.querySelector(".accordion-title_1");

      title.addEventListener("click", () => {
          const content = item.querySelector(".accordion-content_1");
          const icon = item.querySelector(".accordion-icon_1");

          if (content.style.display === "block") {
              content.style.display = "none";
              icon.textContent = "+";
          } else {
              content.style.display = "block";
              icon.textContent = "-";
          }
      });
  });

  // Testimonial slider functionality (Placeholder for dynamic content)
  const prevSlide = document.querySelector(".prev-slide_1");
  const nextSlide = document.querySelector(".next-slide_1");

  prevSlide.addEventListener("click", () => {
      alert("Previous slide clicked! (Functionality to be implemented)");
  });

  nextSlide.addEventListener("click", () => {
      alert("Next slide clicked! (Functionality to be implemented)");
  });
});
