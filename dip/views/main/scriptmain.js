$(document).ready(function() {
    $('.swiper-wrapper').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        rows: 2,
        nextArrow: document.querySelector('#my-arrow-next'),
        prevArrow: document.querySelector('#my-arrow-prev'),

    });
});