$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    // FOREACH VERSION

    var groceries = $("input#list").val().toUpperCase().split(" ").sort();
    var arrayGroceries = groceries.forEach(function(grocery){
      $("ul#groceryList").append("<li>"+grocery+"</li>");
    });


    // MAP VERSION

    // var groceries = $("input#list").val()
    // var arrayGroceries = groceries.split(" ").sort();
    // var arrayGroceries2 = arrayGroceries.map(function(number) {
    //   return $("ul#groceryList").append("<li>"+number.toUpperCase()+"</li>");
    // });

      $(".hideSection").hide();
    });
  });
