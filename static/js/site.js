$(document).ready(function() {
  $(".ui.accordion").accordion();
  $("#tag-category-pop").click(function() {
    $(".hand.point.icon").toggleClass("active");
  });

  $('.dream-flip-toggle').click(function () {
    var target = $('.pusher')
    if (bodyBgSwitchIndex === 0) {
      bodyBgSwitchIndex = 1
      target.toggleClass('flip-it')
      setTimeout( function () {
        $('.front').css('display','none')
        $('.back').css('display','block')
      }, 300)
    }
      else {
        bodyBgSwitchIndex = 0
        target.toggleClass('flip-it')
        setTimeout( function (){
          $('.front').css('display','block')
          $('.back').css('display','none')
      }, 300)
    }
  })
});
