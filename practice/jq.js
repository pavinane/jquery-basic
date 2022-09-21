function funct1() {
  $("#img1").fadeToggle(3000);
}

function funct2() {
  //   $(".box1").css("backgoundColor", "red");
  //   $(".para").css("fontStyle", "italic");
  $(".box1,.box3").css("background-color", "red");
}

// $("button").click(funct3);
// function funct3() {
//   $("#img2").css("width", "500px");
// }

// or

// $("button").click(function funct3() {
//   $("#img2").css("width", "500px");
// });

// or

$("document").ready(function () {
  $(".flow").click(function funct3() {
    $("#img2").css("width", "500px");
  });
});
