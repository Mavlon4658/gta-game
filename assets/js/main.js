const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const aboutSwp = new Swiper('.about-swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 7000,
    loop: true,
    autoplay: {
        delay: 0,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    watchSlidesProgress: false,
    allowTouchMove: false,
    breakpoints: {
        992: {
            spaceBetween: 40,
        }
    }
})