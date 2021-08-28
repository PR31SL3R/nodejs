console.log("welcome");

//accesss id tag
$("#pizza-oven");

let pizza = 0;
//add pizza
$(document).click((event) => {
  pizza++;
  $("#pizza-oven").append("<strong>o</strong>");
  $("body").css("background-color", "blue");

  //remember to use prism
});
//change coloure
