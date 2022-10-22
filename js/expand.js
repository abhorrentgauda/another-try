const brands = document.querySelector('.swiper');
const expand = brands.querySelector('.section-cards__button');
const cards = brands.querySelector('.section__cards');

expand.addEventListener('click', function (evt) {
  evt.preventDefault();

  cards.style.maxHeight = '100%';
  expand.textContent = 'Скрыть';
  if (brands.querySelector('.opened') === null) {
    expand.classList.add('opened');
    expand.classList.remove('section-cards__button--before');
    expand.classList.add('section-cards__button--before--rotate');
  } else {
    cards.style.maxHeight = '160px';
    expand.textContent = 'Показать все';
    expand.classList.remove('opened');
    expand.classList.remove('section-cards__button--before--rotate');
    expand.classList.add('section-cards__button--before')
  }
});

const slider = document.querySelector('.swiper');

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },
           
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});