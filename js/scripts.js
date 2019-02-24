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
    questionOne = 10;
  });
  $('#1a').dblclick(function(){
    $('#question-two').hide(215);
    $('#1aa').removeClass('clicked')
    $('#1a').removeClass('clicked')
    questionOne = 0;
  });
  console.log(questionOne)
  
});