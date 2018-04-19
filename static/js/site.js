var SemanticUIColors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");
$(document).ready(function() {
  $(".ui.accordion").accordion();
  setSemanticUIColor();
  $(".youtube").height(0.6 * $(".youtube").width());
  $("#tag-category-pop").click(function() {
    $(".link.hand.point.icon").toggleClass("active");
  });
});
function connect(a) {
  for (var b = "", c = 0; c < a.length; c++) {
    b = c !== a.length - 1 ? b + (a[c] + ", ") : b + a[c];
  }
  return b;
}
function getRandomInt(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  for (var c;;) {
    if (c = Math.floor(Math.random() * (b - a)) + a, c !== dreamPrevBgIndex) {
      dreamPrevBgIndex = c;
      break;
    }
  }
  return c;
}
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
function setBackground(a, b) {
  a.css({background:b[0]});
  a.css({background:"linear-gradient(to right, " + connect(b) + ")"});
}
;
