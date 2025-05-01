// JavaScript для управления галереей продуктов

document.addEventListener('DOMContentLoaded', function () {
  initGallery();
});

function initGallery() {
  const galleries = document.querySelectorAll('.galleryContainer');

  galleries.forEach((gallery, galleryIndex) => {
    const thumbnails = gallery.querySelectorAll('.thumbnailWrapper');
    const galleryId = galleryIndex + 1;
    const mainMedia = gallery.querySelector(`#mainMedia${galleryId}`);
    const prevButton = gallery.querySelector('.prevButton');
    const nextButton = gallery.querySelector('.nextButton');

    let currentIndex = 0;
    const mediaItems = [];

    thumbnails.forEach((thumb) => {
      const media = thumb.querySelector('img, video');
      mediaItems.push({
        type: media.tagName.toLowerCase(),
        src: media.src,
        alt: media.alt || '',
      });
    });

    window[`updateGallery${galleryId}`] = function (newIndex) {
      currentIndex = newIndex;

      // Обновляем миниатюры
      thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
      });

      const currentMedia = mediaItems[currentIndex];
      if (currentMedia) {
        if (currentMedia.type === 'img') {
          const img = document.createElement('img');
          img.src = currentMedia.src;
          img.alt = currentMedia.alt;
          replaceMainMedia(img, galleryId);
        } else if (currentMedia.type === 'video') {
          const video = document.createElement('video');
          video.src = currentMedia.src;
          video.controls = true;
          video.setAttribute('playsinline', '');
          video.setAttribute('muted', '');
          replaceMainMedia(video, galleryId);
        }
      }
    };

    addSwipeListeners(galleryId);
  });
}

function replaceMainMedia(newMedia, galleryId) {
  const gallery = document.querySelectorAll('.galleryContainer')[galleryId - 1];
  const mediaWrapper = gallery.querySelector('.mediaWrapper');

  // Очистить старое содержимое
  mediaWrapper.innerHTML = '';

  // Назначить классы и ID
  newMedia.className = 'mainMedia';
  newMedia.id = `mainMedia${galleryId}`;

  mediaWrapper.appendChild(newMedia);

  // Повторно инициализировать свайпы
  addSwipeListeners(galleryId);
}

function addSwipeListeners(galleryId) {
  const gallery = document.querySelectorAll('.galleryContainer')[galleryId - 1];
  const mediaWrapper = gallery.querySelector('.mediaWrapper');

  if (!mediaWrapper) return;

  // Удаляем предыдущие обработчики (если они были)
  mediaWrapper.replaceWith(mediaWrapper.cloneNode(true));
  const newMediaWrapper = gallery.querySelector('.mediaWrapper');

  let touchStartX = 0;
  let touchEndX = 0;

  newMediaWrapper.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  newMediaWrapper.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      nextMedia(galleryId);
    } else if (touchEndX > touchStartX + 50) {
      prevMedia(galleryId);
    }
  });
}

function handleMediaChange(index, galleryId) {
  const galleries = document.querySelectorAll('.galleryContainer');
  const galleryIndex = galleryId - 1;

  if (galleries[galleryIndex]) {
    const updateGallery = window[`updateGallery${galleryId}`];
    if (typeof updateGallery === 'function') {
      updateGallery(index);
    }
  }
}

function prevMedia(galleryId) {
  const galleries = document.querySelectorAll('.galleryContainer');
  const galleryIndex = galleryId - 1;

  if (galleries[galleryIndex]) {
    const thumbnails =
      galleries[galleryIndex].querySelectorAll('.thumbnailWrapper');
    const activeIndex = Array.from(thumbnails).findIndex((t) =>
      t.classList.contains('active'),
    );
    const newIndex = (activeIndex - 1 + thumbnails.length) % thumbnails.length;

    handleMediaChange(newIndex, galleryId);
  }
}

function nextMedia(galleryId) {
  const galleries = document.querySelectorAll('.galleryContainer');
  const galleryIndex = galleryId - 1;

  if (galleries[galleryIndex]) {
    const thumbnails =
      galleries[galleryIndex].querySelectorAll('.thumbnailWrapper');
    const activeIndex = Array.from(thumbnails).findIndex((t) =>
      t.classList.contains('active'),
    );
    const newIndex = (activeIndex + 1) % thumbnails.length;

    handleMediaChange(newIndex, galleryId);
  }
}
