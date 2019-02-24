$(document).ready(function(){
  $('#begin').click(function(){
    $('#question-1').show(500);
    $('#intro').hide(10);
  });
  //Initializing the marking protocol.
  let totalMarks;
  var questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen; 
  //knowing that it has been clicked twice.
  var clickedTwice = null;
  $('#1a').click(function(){
    $('#question-two').show(215);
    $('#1aa').addClass('clicked')
    $('#1a').addClass('clicked')
    $('#1bb').removeClass('clicked')
    $('#1b').removeClass('clicked')
    return
  });
  $('#1a').dblclick(function(){
    $('#question-two').hide(215);
    $('#1aa').removeClass('clicked')
    $('#1a').removeClass('clicked')
    questionOne = 0;
  });
  console.log(questionOne)
  $('#1b').click(function(){
    $('#question-two').show(215);
    $('#1bb').addClass('clicked')
    $('#1b').addClass('clicked')
    $('#1aa').removeClass('clicked')
    $('#1a').removeClass('clicked')
    questionOne = 10;
  });
  $('#1b').dblclick(function(){
    $('#question-two').hide(215);
    $('#1bb').removeClass('clicked')
    $('#1b').removeClass('clicked')
    questionOne = 0;
  });
    $('#next1').click(function(){
      $('#question-2').show(500);
      $('#question-1').hide(10);
    })
});