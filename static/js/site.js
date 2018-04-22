var SemanticUIColors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");
var dreamPrevBgIndex = 0;
var dreamBodyBgSwitchIndex = 0;

$(document).ready(function() {
  $(".ui.accordion").accordion();
  setSemanticUIColor();
  $("#tag-category-pop").click(function() {
    $(".hand.point.icon").toggleClass("active");
  });
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

function connect(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + ', '
    } else {
      str += arr[i]
    }
  }
  return str
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  var random
  while (1) {
    random = Math.floor(Math.random() * (max - min)) + min
    if (random !== dreamPrevBgIndex) {
      dreamPrevBgIndex = random
      break
    }
  }
  return random
}

function setBackground(target, gradient) {
  target.css({
    background: gradient[0]
  })
  target.css({
    background: 'linear-gradient(to right, ' + connect(gradient) + ')'
  })
}