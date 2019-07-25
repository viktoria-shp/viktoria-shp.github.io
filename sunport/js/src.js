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
});
$(window).resize(function(){});
positioncheck();