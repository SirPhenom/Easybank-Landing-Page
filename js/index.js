$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".animated-icon3").toggleClass("open");
    $(".navbar").toggleClass("bg-gray");
    $("#navbarLinks").toggleClass("bg-white");
  });
});
