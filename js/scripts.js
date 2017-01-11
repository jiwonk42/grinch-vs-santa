$(document).ready(function() {
  $("button#yes").click(function() {
    $("button#yes").after("<img src=\"img/santa.jpg\" alt=\"a picture of Santa\">");
  });
  $("button#no").click(function() {
    $("button#no").before("<img src=\"img/grinch.jpg\" alt=\"a picture of Grinch\">");
  });
});
