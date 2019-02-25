$(document).ready(function(){
  $('#begin').click(function(){
    $('#question-1').show(350);
    $('#intro').hide(10);
  });
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
  $('#next4').click(function(){
    $('#question-5').show(350);
    $('#question-4').hide(10);
  $('#next5').click(function(){
    $('#question-6').show(350);
    $('#question-5').hide(10);
  $('#next6').click(function(){
    $('#question-7').show(350);
    $('#question-6').hide(10);
  $('#next7').click(function(){
    $('#question-8').show(350);
    $('#question-7').hide(10);
  $('#next8').click(function(){
    $('#question-9').show(350);
    $('#question-8').hide(10);
  $('#next9').click(function(){
    $('#question-10').show(350);
    $('#question-9').hide(10);
    //Checking the results of the test.
  $('#results').click(function(){
    $('#check').show(350);
    $('#question-10').hide(10);
  })
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
  let totalMarks;
  var questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen;
  questionOne = 23;
  console.log(questionOne)
});