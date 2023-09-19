export default function initGallery() {
  const gallery = document.querySelectorAll('.bicycle-images img');
  const galleryContainer = document.querySelector('.bicycle-images');
  function tradeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches
    if(media) {
      galleryContainer.prepend(img);
    }
  }
  function eventGallery(img) {
    img.addEventListener('click', tradeImage);
  }
  gallery.forEach(eventGallery);
}

