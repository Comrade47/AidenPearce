$(document).ready(function(){
	
$('.responsive').slick({
    dots: false,
    infinite:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
            dots:false,
         arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
            dots:false,
            arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

  $('.nav-icon i').click(function(){
      $('.menubar').fadeToggle(100)
    
  })


  $('.menu-nav nav ul li a').click(function(){
    if(this.hash!==''){
      var scroll=$('html,body').animate({
        scrollTop:$(this.hash).offset().top
      },600)
    }
  })



  //counter up
  $('.counter').counterUp({
    delay: 20,
    time: 2000
});


    // venobox
    $('.venobox').venobox(); 
})