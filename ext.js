AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});
      var typed = new Typed('.typed', {
      strings: ["Developer.", "Designer.", "Full Stack Developer.","Web Developer", "Computing Student."],
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 1500,
      loop: true,
      startDelay: 1000,
      
    });

    const filterOptions = document.querySelectorAll('.filter-option');
const pictures = document.querySelectorAll('.picture-item');

filterOptions.forEach(option => {
  option.addEventListener('click', () => {
    filterOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
    
    const filterValue = option.getAttribute('data-filter');
    collageItems.forEach(item => {
      item.style.display= 'none';
      if (item.classList.contains(filterValue) || filterValue === 'all') {
      item.style.display = 'block';
      }
    });
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.card');

// Add click event listeners to filter buttons
for (let i = 0; i < filterButtons.length; i++) {
  const filterButton = filterButtons[i];
  filterButton.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    // Add 'hidden' class to all cards that don't match the selected category
    for (let j = 0; j < cards.length; j++) {
      const card = cards[j];
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    }

    // Refresh AOS library to apply animations to newly revealed cards
    AOS.refresh();

    // Wait for the CSS transition to complete before resetting the transform property on hidden cards
    setTimeout(function() {
      for (let j = 0; j < cards.length; j++) {
        const card = cards[j];
        if (card.classList.contains('d-none')) {
          const cardPosition = card.getBoundingClientRect();
          if (cardPosition.left < window.innerWidth / 2) {
            card.style.transform = 'translateX(-100%)';
          } else {
            card.style.transform = 'translateX(100%)';
          }
        } else {
          card.style.transform = 'translateX(0)';
        }
      }
    }, 300);
  });
}

