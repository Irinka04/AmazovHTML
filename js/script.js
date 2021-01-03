$('.review-cards').slick({
  slidesToShow: 4,
  slidesToScroll: 1,

  infinite: false,
  responsive: [{

    breakpoint: 960,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    }
  }, {
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    }
  }]
});