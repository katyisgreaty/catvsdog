$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cattalk").prepend("<li>Meow!</li>");
    $("ul#dogtalk").prepend("<li>Woof!</li>");
    $("ul#cattalk").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dogtalk").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#cattalk").prepend("<li>Hiss!!</li>");
    $("ul#dogtalk").prepend("<li>Bark! I love you!</li>");
    $("ul#cattalk").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dogtalk").children("li").first().click(function() {
      $(this).remove();
    });
  });

});
