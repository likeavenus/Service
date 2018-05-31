$(document).ready(function() {
  $('#reviews').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    variableWidth: true,
    // appendArrows: ('div .slick-list'),
    prevArrow:'<button class="review__btn-l">',
    nextArrow:'<button class="review__btn-r">'
  });
 $('.slick-slide').css({'width' : '153px'});
 $('.slick-slide').css({'margin' : '22px'});
});