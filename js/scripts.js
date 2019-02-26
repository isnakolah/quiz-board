$(document).ready(function(){
  var questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, totalMarks;
  questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, totalMarks = 0;
  var safe = 0;
  $('#begin').click(function(){
    $('#question-1').fadeIn(350);
    $('#intro').fadeOut(10);
    //introducing a timer
     setTimeout(function(){
    //using the confirm
    //making sure that the timer works only when results is not clicked.
    if ( safe === 10 ) {
      return true;
      } else {
        var wakati = confirm('Time is up, cancel to continue. Ok will give you the results \n If you continue be deducted 5 marks');
        if (wakati == true ){
          //penalty for the question
          $('.mrt').fadeIn(1000);
          $('#question-1, #question-2, #question-3, #question-4, #question-5, #question-6, #question-7, #question-8, question-9, question-10 ').fadeOut(100);
        }else {
          totalMarks -=5;
        }
      }
    }, 600000)
    var pass = [];
    var fail = [];
    //add the pushing to the arrays for questions got
  });
  $('#next1').click(function(){
    $('#question-2').fadeIn(350);
    $('#question-1').fadeOut(10);
    totalMarks += questionOne;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  })
  $('#next2').click(function(){
    $('#question-3').fadeIn(350);
    $('#question-2').fadeOut(10);
    totalMarks += questionTwo;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  })
  $('#next3').click(function(){
    $('#question-4').fadeIn(350);
    $('#question-3').fadeOut(10);
    totalMarks += questionThree;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
  $('#next4').click(function(){
    $('#question-5').fadeIn(350);
    $('#question-4').fadeOut(10);
    totalMarks += questionFour;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
  $('#next5').click(function(){
    $('#question-6').fadeIn(350);
    $('#question-5').fadeOut(10);
    totalMarks += questionFive;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
  $('#next6').click(function(){
    $('#question-7').fadeIn(350);
    $('#question-6').fadeOut(10);
    totalMarks += questionSix;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
  $('#next7').click(function(){
    $('#question-8').fadeIn(350);
    $('#question-7').fadeOut(10);
    totalMarks += questionSeven;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
  $('#next8').click(function(){
    $('#question-9').fadeIn(350);
    $('#question-8').fadeOut(10);
    totalMarks += questionEight;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
  $('#next9').click(function(){
    $('#question-10').fadeIn(350);
    $('#question-9').fadeOut(10);
    totalMarks += questionNine;
    console.log('Total marks are ; '+totalMarks)
    safe ++
  });
    //Checking the results of the test.
  $('#results').click(function(){ //id introduction called results for the results button.
    $('#check').fadeIn(1000);
    $('#question-10').fadeOut(100);
    totalMarks += questionTen;
    console.log('Total marks are ; '+totalMarks)
    safe ++
    //Grading system
    switch(true){
      case (totalMarks<=50):
        $('#perform').text('not good at all. You need to retake the test');
        $('#grade').text('a C.').addClass('text-danger');
        $('#marks').text(totalMarks).addClass('text-danger');
        $('#retake, #marking').show(500);
        break
      case (totalMarks<=80):
        $('#perform').text('fair. Consider putting in more time');
        $('#grade').text('a B.');
        $('#marks').text(totalMarks);
        break
      case (totalMarks<=100):
        $('#perform').text('excellent. Keep up the momentum. You are going places')
        $('#grade').text('an A.').addClass('text-success');
        $('#marks').text(totalMarks).addClass('text-success');
        break
    }
    if (safe===10){
      $('#time-f').text('BTW that was amaizing time keeping! Keep up.');
    }else{
      $('#time-f').text('Work on your time management.');
    }
  });
  $('#marking').click(function(){
    location.reload();
  })
  /*__________________________________
    Question One
    __________________________________
  */
  $('#1a').click(function(){
    $('#question-two').show(215);
    $('#1aa').addClass('clicked')
    $('#1a').addClass('clicked')
    $('#1bb').removeClass('clicked')
    $('#1b').removeClass('clicked')
    questionOne = 10;
    console.log(questionOne)
  });
  //dicrediting the other scores.
  $('#1a').dblclick(function(){
    $('#question-two').hide(215);
    $('#1aa').removeClass('clicked')
    $('#1a').removeClass('clicked')
    questionOne = 0;
    console.log(questionOne)
  });
  $('#1b').click(function(){
    $('#question-two').show(215);
    $('#1bb').addClass('clicked')
    $('#1b').addClass('clicked')
    $('#1aa').removeClass('clicked')
    $('#1a').removeClass('clicked')
    questionOne = 0;
    console.log(questionOne)
  });
  $('#1b').dblclick(function(){
    $('#question-two').hide(215);
    $('#1bb').removeClass('clicked')
    $('#1b').removeClass('clicked')
    questionOne = 0;
    console.log(questionOne);
  });
  // trying to make a function that clicks the questions.
  /*__________________________________
    Question Two
    __________________________________
  */
  $('#2a').click(function(){
    $('#question-three').show(215);
    $('#2aa').addClass('clicked')
    $('#2a').addClass('clicked')
    $('#2bb').removeClass('clicked')
    $('#2b').removeClass('clicked')
    $('#2cc').removeClass('clicked')
    $('#2c').removeClass('clicked')
    questionTwo = 0;
  });
  $('#2a').dblclick(function(){
    $('#question-three').hide(215);
    $('#2aa').removeClass('clicked')
    $('#2a').removeClass('clicked')
    questionTwo = 0;
  });
  //answer two selection
  $('#2b').click(function(){
    $('#question-three').show(215);
    $('#2bb').addClass('clicked')
    $('#2b').addClass('clicked')
    $('#2aa').removeClass('clicked')
    $('#2a').removeClass('clicked')
    $('#2cc').removeClass('clicked')
    $('#2c').removeClass('clicked')
    questionTwo = 10;
  });
  $('#2b').dblclick(function(){
    $('#question-three').hide(215);
    $('#2bb').removeClass('clicked')
    $('#2b').removeClass('clicked')
    questionTwo = 0;
  });
  //answer three selection.
  $('#2c').click(function(){
    $('#question-three').show(215);
    $('#2cc').addClass('clicked')
    $('#2c').addClass('clicked')
    $('#2aa').removeClass('clicked')
    $('#2a').removeClass('clicked')
    $('#2bb').removeClass('clicked')
    $('#2b').removeClass('clicked')
    questionTwo = 0;
  });
  $('#2c').dblclick(function(){
    $('#question-three').hide(215);
    $('#2cc').removeClass('clicked')
    $('#2c').removeClass('clicked')
    questionTwo = 0;
  });
  /*__________________________________
    Question Three
    __________________________________
  */
  //selection of the first answer
  $('#3a').click(function(){
    $('#question-four').show(215);
    $('#3aa').addClass('clicked')
    $('#3a').addClass('clicked')
    $('#3bb').removeClass('clicked')
    $('#3b').removeClass('clicked')
    $('#3cc').removeClass('clicked')
    $('#3c').removeClass('clicked')
    questionThree = 10;
  });
  $('#3a').dblclick(function(){
    $('#question-four').hide(215);
    $('#3aa').removeClass('clicked')
    $('#3a').removeClass('clicked')
    questionThree = 0;
  });
  //answer two selection
  $('#3b').click(function(){
    $('#question-four').show(215);
    $('#3bb').addClass('clicked')
    $('#3b').addClass('clicked')
    $('#3aa').removeClass('clicked')
    $('#3a').removeClass('clicked')
    $('#3cc').removeClass('clicked')
    $('#3c').removeClass('clicked')
    questionThree = 0;
  });
  $('#3b').dblclick(function(){
    $('#question-four').hide(215);
    $('#3bb').removeClass('clicked')
    $('#3b').removeClass('clicked')
    questionThree = 0;
  });
  //answer three selection.
  $('#3c').click(function(){
    $('#question-four').show(215);
    $('#3cc').addClass('clicked')
    $('#3c').addClass('clicked')
    $('#3aa').removeClass('clicked')
    $('#3a').removeClass('clicked')
    $('#3bb').removeClass('clicked')
    $('#3b').removeClass('clicked')
    questionThree = 0;
  });
  $('#3c').dblclick(function(){
    $('#question-four').hide(215);
    $('#3cc').removeClass('clicked')
    $('#3c').removeClass('clicked')
    questionThree = 0;
  });
  /*__________________________________
    Question Four
    __________________________________
  */
  //selection of the first answer
  $('#4a').click(function(){
    $('#question-five').show(215);
    $('#4aa').addClass('clicked')
    $('#4a').addClass('clicked')
    $('#4bb').removeClass('clicked')
    $('#4b').removeClass('clicked')
    $('#4cc').removeClass('clicked')
    $('#4c').removeClass('clicked')
    questionFour = 10;
  });
  $('#4a').dblclick(function(){
    $('#question-five').hide(215);
    $('#4aa').removeClass('clicked')
    $('#4a').removeClass('clicked')
    questionFour = 0;
  });
  //answer two selection
  $('#4b').click(function(){
    $('#question-five').show(215);
    $('#4bb').addClass('clicked')
    $('#4b').addClass('clicked')
    $('#4aa').removeClass('clicked')
    $('#4a').removeClass('clicked')
    $('#4cc').removeClass('clicked')
    $('#4c').removeClass('clicked')
    questionFour = 0;
  });
  $('#4b').dblclick(function(){
    $('#question-five').hide(215);
    $('#4bb').removeClass('clicked')
    $('#4b').removeClass('clicked')
    questionFour = 0;
  });
  //answer three selection.
  $('#4c').click(function(){
    $('#question-five').show(215);
    $('#4cc').addClass('clicked')
    $('#4c').addClass('clicked')
    $('#4aa').removeClass('clicked')
    $('#4a').removeClass('clicked')
    $('#4bb').removeClass('clicked')
    $('#4b').removeClass('clicked')
    questionFour = 0;
  });
  $('#4c').dblclick(function(){
    $('#question-five').hide(215);
    $('#4cc').removeClass('clicked')
    $('#4c').removeClass('clicked')
    questionFour = 0;
  });
  /*__________________________________
    Question Five
    __________________________________
  */
  //selection of the first answer
  $('#5a').click(function(){
    $('#question-six').show(215);
    $('#5aa').addClass('clicked')
    $('#5a').addClass('clicked')
    $('#5bb').removeClass('clicked')
    $('#5b').removeClass('clicked')
    $('#5cc').removeClass('clicked')
    $('#5c').removeClass('clicked')
    questionFive = 10;
  });
  $('#5a').dblclick(function(){
    $('#question-six').hide(215);
    $('#5aa').removeClass('clicked')
    $('#5a').removeClass('clicked')
    questionFive = 0;
  });
  //answer two selection
  $('#5b').click(function(){
    $('#question-six').show(215);
    $('#5bb').addClass('clicked')
    $('#5b').addClass('clicked')
    $('#5aa').removeClass('clicked')
    $('#5a').removeClass('clicked')
    $('#5cc').removeClass('clicked')
    $('#5c').removeClass('clicked')
    questionFive = 0;
  });
  $('#5b').dblclick(function(){
    $('#question-six').hide(215);
    $('#5bb').removeClass('clicked')
    $('#5b').removeClass('clicked')
    questionFive = 0;
  });
  //answer three selection.
  $('#5c').click(function(){
    $('#question-six').show(215);
    $('#5cc').addClass('clicked')
    $('#5c').addClass('clicked')
    $('#5aa').removeClass('clicked')
    $('#5a').removeClass('clicked')
    $('#5bb').removeClass('clicked')
    $('#5b').removeClass('clicked')
    questionFive = 0;
  });
  $('#5c').dblclick(function(){
    $('#question-six').hide(215);
    $('#5cc').removeClass('clicked')
    $('#5c').removeClass('clicked')
    questionFive = 0;
  });
  /*__________________________________
    Question Six
    __________________________________
  */
  //selection of the first answer
  $('#6a').click(function(){
    $('#question-seven').show(215);
    $('#6aa').addClass('clicked')
    $('#6a').addClass('clicked')
    $('#6bb').removeClass('clicked')
    $('#6b').removeClass('clicked')
    $('#6cc').removeClass('clicked')
    $('#6c').removeClass('clicked')
    questionSix = 10;
  });
  $('#6a').dblclick(function(){
    $('#question-seven').hide(215);
    $('#6aa').removeClass('clicked')
    $('#6a').removeClass('clicked')
    questionSix = 0;
  });
  //answer two selection
  $('#6b').click(function(){
    $('#question-seven').show(215);
    $('#6bb').addClass('clicked')
    $('#6b').addClass('clicked')
    $('#6aa').removeClass('clicked')
    $('#6a').removeClass('clicked')
    $('#6cc').removeClass('clicked')
    $('#6c').removeClass('clicked')
    questionSix = 0;
  });
  $('#6b').dblclick(function(){
    $('#question-seven').hide(215);
    $('#6bb').removeClass('clicked')
    $('#6b').removeClass('clicked')
    questionSix = 0;
  });
  //answer three selection.
  $('#6c').click(function(){
    $('#question-seven').show(215);
    $('#6cc').addClass('clicked')
    $('#6c').addClass('clicked')
    $('#6aa').removeClass('clicked')
    $('#6a').removeClass('clicked')
    $('#6bb').removeClass('clicked')
    $('#6b').removeClass('clicked')
    questionSix = 0;
  });
  $('#6c').dblclick(function(){
    $('#question-seven').hide(215);
    $('#6cc').removeClass('clicked')
    $('#6c').removeClass('clicked')
    questionSix = 0;
  });
  /*__________________________________
    Question Seven
    __________________________________
  */
  //selection of the first answer
  $('#7a').click(function(){
    $('#question-eight').show(215);
    $('#7aa').addClass('clicked')
    $('#7a').addClass('clicked')
    $('#7bb').removeClass('clicked')
    $('#7b').removeClass('clicked')
    $('#7cc').removeClass('clicked')
    $('#7c').removeClass('clicked')
    questionSeven = 0;
  });
  $('#7a').dblclick(function(){
    $('#question-eight').hide(215);
    $('#7aa').removeClass('clicked')
    $('#7a').removeClass('clicked')
    questionSeven = 0;
  });
  //answer two selection
  $('#7b').click(function(){
    $('#question-eight').show(215);
    $('#7bb').addClass('clicked')
    $('#7b').addClass('clicked')
    $('#7aa').removeClass('clicked')
    $('#7a').removeClass('clicked')
    $('#7cc').removeClass('clicked')
    $('#7c').removeClass('clicked')
    questionSeven = 10;
  });
  $('#7b').dblclick(function(){
    $('#question-eight').hide(215);
    $('#7bb').removeClass('clicked')
    $('#7b').removeClass('clicked')
    questionSeven = 0;
  });
  //answer three selection.
  $('#7c').click(function(){
    $('#question-eight').show(215);
    $('#7cc').addClass('clicked')
    $('#7c').addClass('clicked')
    $('#7aa').removeClass('clicked')
    $('#7a').removeClass('clicked')
    $('#7bb').removeClass('clicked')
    $('#7b').removeClass('clicked')
    questionSeven = 0;
  });
  $('#7c').dblclick(function(){
    $('#question-eight').hide(215);
    $('#7cc').removeClass('clicked')
    $('#7c').removeClass('clicked')
    questionSeven = 0;
  });
  /*__________________________________
    Question Eight
    __________________________________
  */
  //selection of the first answer
  $('#8a').click(function(){
    $('#question-nine').show(215);
    $('#8aa').addClass('clicked')
    $('#8a').addClass('clicked')
    $('#8bb').removeClass('clicked')
    $('#8b').removeClass('clicked')
    $('#8cc').removeClass('clicked')
    $('#8c').removeClass('clicked')
    questionEight = 0;
  });
  $('#8a').dblclick(function(){
    $('#question-nine').hide(215);
    $('#8aa').removeClass('clicked')
    $('#8a').removeClass('clicked')
    questionEight = 0;
  });
  //answer two selection
  $('#8b').click(function(){
    $('#question-nine').show(215);
    $('#8bb').addClass('clicked')
    $('#8b').addClass('clicked')
    $('#8aa').removeClass('clicked')
    $('#8a').removeClass('clicked')
    $('#8cc').removeClass('clicked')
    $('#8c').removeClass('clicked')
    questionEight = 10;
  });
  $('#8b').dblclick(function(){
    $('#question-nine').hide(215);
    $('#8bb').removeClass('clicked')
    $('#8b').removeClass('clicked')
    questionEight = 0;
  });
  //answer three selection.
  $('#8c').click(function(){
    $('#question-nine').show(215);
    $('#8cc').addClass('clicked')
    $('#8c').addClass('clicked')
    $('#8aa').removeClass('clicked')
    $('#8a').removeClass('clicked')
    $('#8bb').removeClass('clicked')
    $('#8b').removeClass('clicked')
    questionEight = 0;
  });
  $('#8c').dblclick(function(){
    $('#question-nine').hide(215);
    $('#8cc').removeClass('clicked')
    $('#8c').removeClass('clicked')
    questionEight = 0;
  });
  /*__________________________________
    Question Nine
    __________________________________
  */
  //selection of the first answer
  $('#9a').click(function(){
    $('#question-ten').show(215);
    $('#9aa').addClass('clicked')
    $('#9a').addClass('clicked')
    $('#9bb').removeClass('clicked')
    $('#9b').removeClass('clicked')
    $('#9cc').removeClass('clicked')
    $('#9c').removeClass('clicked')
    questionNine = 0;
  });
  $('#9a').dblclick(function(){
    $('#question-ten').hide(215);
    $('#9aa').removeClass('clicked')
    $('#9a').removeClass('clicked')
    questionNine = 0;
  });
  //answer two selection
  $('#9b').click(function(){
    $('#question-ten').show(215);
    $('#9bb').addClass('clicked')
    $('#9b').addClass('clicked')
    $('#9aa').removeClass('clicked')
    $('#9a').removeClass('clicked')
    $('#9cc').removeClass('clicked')
    $('#9c').removeClass('clicked')
    questionNine = 10;
  });
  $('#9b').dblclick(function(){
    $('#question-ten').hide(215);
    $('#9bb').removeClass('clicked')
    $('#9b').removeClass('clicked')
    questionNine = 0;
  });
  //answer three selection.
  $('#9c').click(function(){
    $('#question-ten').show(215);
    $('#9cc').addClass('clicked')
    $('#9c').addClass('clicked')
    $('#9aa').removeClass('clicked')
    $('#9a').removeClass('clicked')
    $('#9bb').removeClass('clicked')
    $('#9b').removeClass('clicked')
    questionNine = 0;
  });
  $('#9c').dblclick(function(){
    $('#question-ten').hide(215);
    $('#9cc').removeClass('clicked')
    $('#9c').removeClass('clicked')
    questionNine = 0;
  });
  /*__________________________________
    Question Ten
    __________________________________
  */
  //selection of the first answer
  $('#10a').click(function(){
    $('#submit').show(215);
    $('#10aa').addClass('clicked')
    $('#10a').addClass('clicked')
    $('#10bb').removeClass('clicked')
    $('#10b').removeClass('clicked')
    $('#10cc').removeClass('clicked')
    $('#10c').removeClass('clicked')
    questionTen = 0;
  });
  $('#10a').dblclick(function(){
    $('#submit').hide(215);
    $('#10aa').removeClass('clicked')
    $('#10a').removeClass('clicked')
    questionTen = 0;
  });
  //answer two selection
  $('#10b').click(function(){
    $('#submit').show(215);
    $('#10bb').addClass('clicked')
    $('#10b').addClass('clicked')
    $('#10aa').removeClass('clicked')
    $('#10a').removeClass('clicked')
    $('#10cc').removeClass('clicked')
    $('#10c').removeClass('clicked')
    questionTen = 0;
  });
  $('#10b').dblclick(function(){
    $('#submit').hide(215);
    $('#10bb').removeClass('clicked')
    $('#10b').removeClass('clicked')
    questionTen = 0;
  });
  //answer three selection.
  $('#10c').click(function(){
    $('#submit').show(215);
    $('#10cc').addClass('clicked')
    $('#10c').addClass('clicked')
    $('#10aa').removeClass('clicked')
    $('#10a').removeClass('clicked')
    $('#10bb').removeClass('clicked')
    $('#10b').removeClass('clicked')
    questionTen = 10;
  });
  $('#10c').dblclick(function(){
    $('#submit').hide(215);
    $('#10cc').removeClass('clicked')
    $('#10c').removeClass('clicked')
    questionTen = 0;
  });
  $('#time-results').click(function(){
    $('#timp').hide(215);
    $('#check').fadeIn(1000);
    switch(true){
      case (totalMarks<=50):
        $('#perform').text('not good at all. You need to retake the test');
        $('#grade').text('a C.').addClass('text-danger');
        $('#marks').text(totalMarks).addClass('text-danger');
        $('#retake, #marking').show(500);
        break
      case (totalMarks<=80):
        $('#perform').text('fair. Consider putting in more time');
        $('#grade').text('a B.');
        $('#marks').text(totalMarks);
        $('#retake, #marking').show(500);
        break
      case (totalMarks<=100):
        $('#perform').text('excellent. Keep up the momentum. You are going places')
        $('#grade').text('an A.').addClass('text-success');;
        $('#marks').text(totalMarks).addClass('text-success');
        $('#retake, #marking').show(500);
        break
    }
    if (safe===10){
      $('#time-f').text('BTW that was amaizing time keeping! Keep up.');
    }else{
      $('#time-f').text('Work on your time management.');
    }
  });
  $('#marking').click(function(){
    location.reload();
  })
});
//The end of the code