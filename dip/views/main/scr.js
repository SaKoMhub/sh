$(document).ready(function() {
    $('.swiper-wrapper').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        rows: 3,
        nextArrow: document.querySelector('#my-arrow-next'),
        prevArrow: document.querySelector('#my-arrow-prev'),

    });
});