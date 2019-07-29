var menuOpener = document.querySelector('.menu-opener');
var menu =  document.querySelector('.menu');

menuOpener.addEventListener('click', function(){
  menu.classList.toggle('menu-is-active');
})

function positioncheck(){
  if($(this).scrollTop()>=100){
    $(".header").addClass("fixed");
  }else{
    $(".header").removeClass("fixed");
  }
}
$(window).scroll(function(){
  positioncheck();
  console.log('scroll');
  if($(".menu").hasClass('menu-is-active')) {
    $('.menu-opener').trigger('click');
  }
});
$(window).resize(function(){});
positioncheck();

$().ready(function(){
  $('.slick-carousel').slick({
    //infinite: true,
    speed: 700,
    //autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  // scroll section
  let scrollLink = $('.scroll');
  scrollLink.click(function (e) {
      if($(this.hash).length){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1000);
        $(this).closest('.menu').find('.active').removeClass('active');
        $(this).closest('li').addClass('active')
      }
  });
});

if (document.getElementById('map-canvas')){ 
  var latLng = new google.maps.LatLng(48.838375, 24.802010),
    markerIcon = {
      url: '../img/map-marker.svg',
      scaledSize: new google.maps.Size(60, 60),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20,40)
        };
  var mapOptions = {
    zoom: 16,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: markerIcon
    });
}
 