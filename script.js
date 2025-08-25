// Filtering logic
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.card video').forEach(video => {
  video.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxVideo.src = video.src;
    lightboxVideo.play();
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxVideo.pause();
  lightboxVideo.src = '';
});
