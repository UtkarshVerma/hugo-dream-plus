var SemanticUIColors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");
$(document).ready(function() {
  $(".ui.accordion").accordion();
  setSemanticUIColor();
  $(".youtube").height(0.6 * $(".youtube").width());
  $("#tag-category-pop").click(function() {
    $(".link.hand.point.icon").toggleClass("active");
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
