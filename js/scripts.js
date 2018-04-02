
function Place(location, food, scenic, entertainment) {
  this.location = location;
  this.food = food;
  this.scenic = scenic;
  this.entertainment = entertainment;
};

var england = new Place("England", "Cafe Rouge", "Lake Isabella", "Murphy's Bar");
var scotland = new Place("Scotland", "The Rowdy Rat","The Lovely Isles", "The Crystal Ballroom");






$().ready(function(){
  $(".form1").submit(function(e){
    e.preventDefault();

    $(".details").append("<a href='#' id='"+ england.location+ "'>" + england.location + "</a> <br>");
    $(".details").append("<a href='#'>" + scotland.location + "</a>");
  });

  var keys = Object.keys(england);
  alert(keys);
  $("#placeDetails").show();

  $(".details").click(function(){
    // debugger;
    for(var i = 0; i < keys.length; i++) {              $("#placeDetails").append("<p>" + england[keys[i]] + "</p>");
    }
    for(var i = 0; i < keys.length; i++) {
    $("#placeDetails").append("<p>" + scotland[keys[i]] + "</p>");
    }

  });

});






    // Place.prototype.swing(){
    //   return this.location + 'swing';
    // }



//
//   })
// })
// var inputs = document.querySelectorAll('input');
// var place = new Place();
// var keys = Object.keys(place);
// for (var i = 0; i < keys.length; i ++){
//   place[keys[i]] = inputs[i].value;
//   alert(inputs[i].value);
