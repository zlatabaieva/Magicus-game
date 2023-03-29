let potCounter = 0

$(document).ready(function(){
  $(".button").click(function(){
    $(".screen1").addClass("none");
    $(".screen2").removeClass("none");
    $(".screen3").addClass("none");
  });
});

$(document).ready(function(){
  $(".palka").click(function(){
    $(".palka").css("animation", 'palka 2s linear infinite');
    $(".boble1").css("animation", 'boble1 5s linear  infinite');
    $(".boble").css("animation", 'boble 5s linear  infinite');
  });
});

$(document).ready(function(){
  $(".b").click(function(){
    $(".screen3").addClass("none");
    $(".screen1").removeClass("none");
    $(".screen2").addClass("none");
  });
});

$(document).ready(function(){
  $(".dote1").click(function(){
  $(".bubble1").toggleClass("none");
  });
  $(".dote2").click(function(){
  $(".bubble2").toggleClass("none");
  });
  $(".dote3").click(function(){
  $(".bubble3").toggleClass("none");
  });
  $(".dote4").click(function(){
  $(".bubble4").toggleClass("none");
  });
  $(".dote5").click(function(){
  $(".bubble5").toggleClass("none");
  });
  $(".dote6").click(function(){
  $(".bubble6").toggleClass("none");
  });
  $(".dote7").click(function(){
  $(".bubble7").toggleClass("none");
  });
  $(".dote8").click(function(){
  $(".bubble8").toggleClass("none");
  });
  $(".dote9").click(function(){
  $(".bubble9").toggleClass("none");
  });
  $(".dote10").click(function(){
  $(".bubble10").toggleClass("none");
  });
  $(".dote11").click(function(){
  $(".bubble11").toggleClass("none");
  });
  $(".dote12").click(function(){
  $(".bubble12").toggleClass("none");
  });
  $(".dote13").click(function(){
  $(".bubble13").toggleClass("none");
  });

$(document).mousemove(function(e) {
 $('#cursor').css({
    left:e.pageX - 10,
   top:e.pageY - 10
});

 $( ".obj1" ).draggable();
 $( ".obj2" ).draggable();
 $( ".obj6" ).draggable();
 $( ".obj5" ).draggable();
 $( ".obj4" ).draggable();
 $( ".obj9" ).draggable();
 $( ".obj7" ).draggable();
 $( ".obj10" ).draggable();
 $( ".obj12" ).draggable();
 $( ".obj3" ).draggable();
 $( ".obj11" ).draggable();
 $( ".obj13" ).draggable();
 $( ".obj8" ).draggable();

$( ".kotel" ).droppable({
  drop: function( event, ui ) {

    const classes = ui.draggable[0].classList

    if (classes.contains('obj1') || classes.contains('obj6')) {
      $(".pena1").removeClass("none")
      $(".pena").addClass("none")
      $(".pena2").addClass("none");
      $(".pena3").addClass("none");
      $(".pena4").addClass("none");
      $(".pena5").addClass("none");
    }
    if (classes.contains('obj2') || classes.contains('obj5')) {
      $(".pena2").removeClass("none");
      $(".pena").addClass("none");
      $(".pena1").addClass("none");
      $(".pena3").addClass("none");
      $(".pena4").addClass("none");
      $(".pena5").addClass("none");
    }
    if (classes.contains('obj4') || classes.contains('obj11')) {
      $(".pena3").removeClass("none");
      $(".pena").addClass("none");
      $(".pena1").addClass("none");
      $(".pena2").addClass("none");
      $(".pena4").addClass("none");
      $(".pena5").addClass("none");
    }
    if (classes.contains('obj7') || classes.contains('obj10') || classes.contains('obj12')) {
      $(".pena4").removeClass("none");
      $(".pena").addClass("none");
      $(".pena1").addClass("none");
      $(".pena2").addClass("none");
      $(".pena3").addClass("none");
      $(".pena5").addClass("none");
    }
    if (classes.contains('obj3') || classes.contains('obj11') || classes.contains('obj13') || classes.contains('obj8')) {
      $(".pena5").removeClass("none");
      $(".pena").addClass("none");
      $(".pena1").addClass("none");
      $(".pena2").addClass("none");
      $(".pena3").addClass("none");
      $(".pena4").addClass("none");
    }
    potCounter += 1

    console.log(potCounter);

    if (potCounter > 2) {
      $(".screen1").addClass("none");
      $(".screen2").addClass("none");
      $(".screen3").removeClass("none");
    }
  }
 });
 });
 });
