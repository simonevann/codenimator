$(document).ready(function() {
  cdmator.init($('#innerTerminal'));
  $('#submit').click(function(e){
    e.preventDefault();
    input = $('textarea').val();
    $('#input').addClass('displayNone');
    $('#outputArea').removeClass('displayNone');
    cdmator.setDelay($('#delay').val())
    cdmator.start(input);
  })
});
