  const carousel = document.getElementById('carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentIndex = 0;

  function rotateCarousel() {
    currentIndex = (currentIndex + 1) % totalItems;
    const translateValue = -currentIndex * 450; // Width of each item

    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  setInterval(rotateCarousel, 4500); // Change slide every 3 seconds