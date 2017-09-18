//When the DOM is loaded and ready for use, run the js code that we write inside our ready{}
$(document) .ready(function(){

//when anything with a class of bob is clicked, run function//
//$(".bob") .click( function(){
//get all image tags and hide() them
//$("img") .hide()
//})
//})

//when the document is ready for a button on my html to be clicked//
//$(document) .ready(function(){
//$("button") .click(function(){
//whe button is clicked fadeToggle//
//  $("h1") .fadeToggle()
//  })
//  $("h1") .click(function(){
//  $("button").slideToggle()
//  })
//   $("button") .hover(function(){
//     $("h1").slideToggle()
//   })
//
// })

//make a sandwich
//get 2 slices of bread
//put extra mayo on one slice put
//2 lbs of meat/fill
//2 slices of tomato
//cut at an angle //

//when the disappear button is clicked image disappears//
$(".disappear") .click(function(){
    $("img") .hide()
})
//when appear button is clicked image appears again//
$(".appear") .click(function(){
  $("img") .show()
})
//when heading is double clicked the background color changes to bolor//
$("h1") .dblclick(function(){
  $("h1") .css("background-color", "blue")
})
$(".addcontent") .click(function(){
  $("ul") .append("<li>Add li</li>")
})
//when the mouse hovers over div with class effect, the background-color changes to yellow//
$(".effect") .hover(function(){
  $(this) .css("background-color", "cyan")
})
//when mouse leaves h2, it slides up//
$("h2") .mouseleave(function(){
  $(this) .slideUp("5000")
})

$(".fadeaway") .hover(function(){
  $(".fadeaway") .fadeOut(5000)
})
$(".fade") .click(function(){
  $(".fadeaway") .show()
})
$("h4") .hover(function(){
  $(this) .css("font-family","courier")
})
//$(".popup") .magnificPopup({type:image;})

})
