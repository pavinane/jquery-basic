$(document).ready(function () {
  $("#todoinput").change(function () {
    var todoinput = $(this).val();
    $("ul").append(
      "<li>" +
        todoinput +
        '<i class="fas fa-check"></i> <i class="fas fa-trash"></i>  </li>'
    );
    $(this).val("");
  });

  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked");
  });
});
