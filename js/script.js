$('.slider_deals').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-chevron-left left_arrow1 "></i>',
  nextArrow:'<i class="fas fa-chevron-right right_arrow2 "></i>',
});

$('.sidbar_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  prevArrow:'<i class="fas fa-chevron-up ab"></i>',
  nextArrow: '<i class="fas fa-chevron-down bc"></i>',
});

$('.blog_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow:'.left',
  nextArrow: '.right',
});


$('.box-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
});


$(".hiden").niceScroll({
    cursorwidth:"5px",
    cursorcolor: "#54ae3f",
  });


  $(".popbox").niceScroll({
    cursorwidth:"5px",
    cursorcolor: "#54ae3f",
  });


  $(".popup").click(function(){
    $(".popbox").css("top","0")
})

$(".close").click(function(){
    $(".popbox").css("top","-400%")
})

$(".slidebox").slick({
    vertical: true,
    slidesToShow:4,
    prevArrow:'<i class="fas fa-chevron-up ab"></i>',
    nextArrow: '<i class="fas fa-chevron-down bc"></i>',
})

$(".clickimg").click(function(e){
    console.log(e.target.dataset.url)
    $(".changeimg").attr("src",e.target.dataset.url)
})

var count = 0

$(".plus").click(function(){
    count++
    $(".box").text(count)
})
$(".minus").click(function(){
    if(count > 0 ){
        count--
    $(".box").text(count)
    }
})
$(".item_tool").click(function(){
  $(".slide-tools").toggleClass("active")
})

$(".remover").click(function(){
  $(".slide-tools").removeClass("active")
})