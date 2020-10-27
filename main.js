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
    $(imgActive).next('img').addClass('active');
    $(navActive).next('i').addClass('active');
  }
  else if (direction === 'prev') {
    $(imgActive).prev('img').addClass('active');
    $(navActive).prev('i').addClass('active');
  }

}
