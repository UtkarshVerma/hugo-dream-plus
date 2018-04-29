var SemanticUIColors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");

$(document).ready(function() {
  $(".ui.accordion").accordion();
  setSemanticUIColor();
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

function randomInt(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return random = Math.floor(Math.random() * (b - a)) + a;
}

function setSemanticUIColor() {
  for (var a = [$(".dream-tags"), $(".sidebar-dream-tags")], b = 0; b < a.length; b++) {
    a[b].children().map(function() {
      $(this).addClass(SemanticUIColors[randomInt(0, SemanticUIColors.length)]);
    });
  }
}