$(document).ready(function(){
  $('#begin').click(function(){
    $('#question-1').show(350);
    $('#intro').hide(10);
  });
  //Initializing the marking protocol.
  let totalMarks;
    $('#next1').click(function(){
      $('#question-2').show(350);
      $('#question-1').hide(10);
    })
    $('#next2').click(function(){
      $('#question-3').show(350);
      $('#question-2').hide(10);
    })
    $('#next3').click(function(){
      $('#question-4').show(350);
      $('#question-3').hide(10);
    })
});