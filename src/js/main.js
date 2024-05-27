// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();

function languages() {
  const container = document.querySelector('.nav__language');

  if (!container) {
    return null;
  }

  const selected = document.querySelector('.nav__language-selected');
  const links = document.querySelectorAll('.nav__language-link');

  // Toggle 'active' class on click of selected element
  selected.addEventListener('click', function (e) {
    // Remove 'active' class from all menus
    container.classList.toggle('active');

    e.stopPropagation();
  });

  // Remove 'active' class when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', function () {
      container.classList.remove('active');
    });
  });

  // Remove 'active' class when clicking outside the menu
  document.addEventListener('click', function (e) {
    if (!container.contains(e.target)) {
      container.classList.remove('active');
    }
  });
}

languages();

// function advantagesslider() {
//   const container = document.querySelector('.advantages');

//   if (!container) {
//     return null;
//   }

//   var swiper = new Swiper(".advantages__content", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     slideClass: "advantages__item",
//     wrapperClass: "advantages__list",
//     pagination: {
//       el: ".advantages__pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".advantages__arrow-next",
//       prevEl: ".advantages__arrow-prev",
//     },
//   });
// }

// if (window.matchMedia("(max-width: 767px)").matches) {
//   advantagesslider();
// }

function advantagesslider() {
  const container = document.querySelector('.advantages');

  if (!container) {
    return null;
  }

  var swiper = new Swiper(".advantages__content", {
    slidesPerView: 1,
    // spaceBetween: 20,
    slideClass: "advantages__item",
    wrapperClass: "advantages__list",
    pagination: {
      el: ".advantages__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".advantages__arrow-next",
      prevEl: ".advantages__arrow-prev",
    },
    on: {
      slideChange: function () {
        updateActivePlanet(swiper.activeIndex);
      },
    },
  });

  function updateActivePlanet(activeIndex) {
    const planets = document.querySelectorAll('.advantages__planet');
    planets.forEach((planet, index) => {
      if (index === activeIndex) {
        planet.classList.add('active');
      } else {
        planet.classList.remove('active');
      }
    });
  }

  // Initialize the active class on the first planet
  updateActivePlanet(swiper.activeIndex);
}

if (window.matchMedia("(max-width: 767px)").matches) {
  advantagesslider();
}
