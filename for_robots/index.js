document.addEventListener('DOMContentLoaded', function () {
  console.log('Страница полностью загружена');

  // Здесь можно разместить весь код JavaScript, который должен
  // выполняться после загрузки страницы

  // Пример инициализации обработчиков событий
  initEventHandlers();
});

function initEventHandlers() {
  // Обработчик для бургер-меню
  const burger = document.querySelector('[data-burger]');
  const sideMenu = document.querySelector('.sideMenu');

  if (burger && sideMenu) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      burger.classList.toggle('active');
      sideMenu.classList.toggle('open');

      // Добавление/удаление overlay при открытии/закрытии меню
      toggleOverlay(sideMenu.classList.contains('open'));
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function (e) {
      if (
        sideMenu.classList.contains('open') &&
        !sideMenu.contains(e.target) &&
        e.target !== burger
      ) {
        burger.classList.remove('active');
        sideMenu.classList.remove('open');
        toggleOverlay(false);
      }
    });
  }

  // Обработка кликов по ссылкам навигации
  const navButtons = document.querySelectorAll(
    'button[onclick*="handleClick"]',
  );
  navButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const section = this.getAttribute('onclick').match(/'([^']+)'/)[1];
      handleNavigation(section);
    });
  });
}

function toggleOverlay(show) {
  let overlay = document.querySelector('.overlay');

  if (show) {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'overlay';
      document.body.appendChild(overlay);
    }
  } else if (overlay) {
    overlay.remove();
  }
}

function handleNavigation(section) {
  console.log(`Переход к секции: ${section}`);

  // Плавная прокрутка к указанной секции
  const targetSection = document.getElementById(section);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Закрыть мобильное меню после навигации
  const sideMenu = document.querySelector('.sideMenu');
  const burger = document.querySelector('[data-burger]');

  if (sideMenu && sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
    if (burger) burger.classList.remove('active');
    toggleOverlay(false);
  }
}
