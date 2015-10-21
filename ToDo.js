$(document).ready(function() {
  $("#chorebtn").click(function(event) {
    event.preventDefault();

    var newChore = $("input#userInput").val();
    $("input#userInput").val("");
    if
      (newChore === '') {
      alert("Please enter your chore");
    }

    $("ul#chores").append("<li><span class='chore'>" + " " + newChore + "</span></li>");

    $('<input type="checkbox" value="1"/>').prependTo("li");
  //   if ( value > 1){
  //     $( "p" ).click(function( event ) {
  // event.stopPropagation();
//
// });

  });
});
