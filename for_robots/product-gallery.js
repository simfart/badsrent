// JavaScript для управления галереей продуктов

document.addEventListener('DOMContentLoaded', function () {
  initGallery();
});

function initGallery() {
  // Находим все контейнеры галереи
  const galleries = document.querySelectorAll('.galleryContainer');

  galleries.forEach((gallery, galleryIndex) => {
    const thumbnails = gallery.querySelectorAll('.thumbnailWrapper');
    const galleryId = galleryIndex + 1;
    const mainMedia = gallery.querySelector(`#mainMedia${galleryId}`);
    const prevButton = gallery.querySelector('.prevButton');
    const nextButton = gallery.querySelector('.nextButton');

    let currentIndex = 0;
    const mediaItems = [];

    // Собираем данные о медиа из миниатюр
    thumbnails.forEach((thumb, index) => {
      const media = thumb.querySelector('img, video');
      mediaItems.push({
        type: media.tagName.toLowerCase(),
        src: media.src,
        alt: media.alt,
      });
    });

    // Функция обновления активной миниатюры и главного медиа для конкретной галереи
    window[`updateGallery${galleryId}`] = function (newIndex) {
      currentIndex = newIndex;

      // Обновляем активную миниатюру
      thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      });

      // Обновляем главное медиа
      const currentMedia = mediaItems[currentIndex];
      if (mainMedia) {
        if (currentMedia.type === 'img') {
          // Если текущий элемент img, обновляем его
          if (mainMedia.tagName.toLowerCase() === 'img') {
            mainMedia.src = currentMedia.src;
            mainMedia.alt = currentMedia.alt;
          } else {
            // Если был video, заменяем на img
            const img = document.createElement('img');
            img.src = currentMedia.src;
            img.className = 'mainMedia';
            img.id = `mainMedia${galleryId}`;
            img.alt = currentMedia.alt;
            mainMedia.parentNode.replaceChild(img, mainMedia);
          }
        } else if (currentMedia.type === 'video') {
          // Если текущий элемент video, обновляем его
          if (mainMedia.tagName.toLowerCase() === 'video') {
            mainMedia.src = currentMedia.src;
          } else {
            // Если был img, заменяем на video
            const video = document.createElement('video');
            video.src = currentMedia.src;
            video.className = 'mainMedia';
            video.id = `mainMedia${galleryId}`;
            video.controls = true;
            mainMedia.parentNode.replaceChild(video, mainMedia);
          }
        }
      }
    };

    // Инициализация свайпов для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;

    const mediaWrapper = gallery.querySelector('.mediaWrapper');
    if (mediaWrapper) {
      mediaWrapper.addEventListener(
        'touchstart',
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        false,
      );

      mediaWrapper.addEventListener(
        'touchend',
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        },
        false,
      );
    }

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        // Свайп влево
        nextMedia(galleryId);
      } else if (touchEndX > touchStartX + 50) {
        // Свайп вправо
        prevMedia(galleryId);
      }
    }
  });
}

// Вспомогательная функция для управления галереей из HTML
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

// Функция для переключения на предыдущее изображение
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

// Функция для переключения на следующее изображение
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
