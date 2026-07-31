/* ==========================================================================
   PIXEL PLATFORM - KEYBOARD INTERACTIVE SLIDER CONTROLLER
   Supports Arrow Left/Right key navigation & color-coded mistake/practice slides.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('prev-slide-btn');
  const nextBtn = document.getElementById('next-slide-btn');
  const currentSlideIndicator = document.getElementById('slide-counter');

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (currentSlideIndicator) {
      currentSlideIndicator.textContent = `${index + 1} / ${slides.length}`;
    }

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === slides.length - 1;
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Keyboard Arrow Keys Listener
  document.addEventListener('keydown', (e) => {
    // Avoid triggering when user is typing in inputs or textareas
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight') {
      // In RTL (Arabic), Right Arrow goes to Next Slide or Previous Slide depending on reading direction
      if (document.documentElement.dir === 'rtl') {
        prevSlide();
      } else {
        nextSlide();
      }
    } else if (e.key === 'ArrowLeft') {
      if (document.documentElement.dir === 'rtl') {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  showSlide(currentIndex);
});
