$(document).ready( function() {
  var prev = $('body .container .slider-wrapper .prev');
  var next = $('body .container .slider-wrapper .next');

  //NAVIGA PRECEDENTE
  $(prev).click( function() {
    prevNext('prev');
  })
  //NAVIGA SUCCESSIVO
  $(next).click( function() {
    prevNext('next');
  })
  //NAVIGA CON TASTIERA
  $(document).keydown( function(event) {
    console.log(event.keyCode);
    //SINISTRA
    if (event.keyCode == 37) {
      prevNext('prev');
    }
    //DESTRA
    else if (event.keyCode == 39) {
      prevNext('next');
    }
  })
})

//FUNZIONE NAVIGA AVANTI INDIETRO
function prevNext(direction) {

  var imgActive = $('body .container .slider-wrapper .images img.active');
  var navActive = $('body .container .slider-wrapper .nav i.active');

  //RESET ACTIVE
  imgActive.removeClass('active');
  navActive.removeClass('active');

  //DIREZIONE
  if (direction === 'next') {
    if ( imgActive.hasClass('last') ) {
      $('body .container .slider-wrapper .images img.first').addClass('active');
      $('body .container .slider-wrapper .nav i.first').addClass('active');
    }
    else {
      $(imgActive).next('img').addClass('active');
      $(navActive).next('i').addClass('active');
    }
  }
  else if (direction === 'prev') {
    if ( imgActive.hasClass('first') ) {
      $('body .container .slider-wrapper .images img.last').addClass('active');
      $('body .container .slider-wrapper .nav i.last').addClass('active');
    }
    else {
      $(imgActive).prev('img').addClass('active');
      $(navActive).prev('i').addClass('active');
    }
  }
}
