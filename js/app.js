$(document).ready(function () {
    newQuiz();

    $(".answer").click(function(event){
        event.preventDefault();
        var selectedNumber = + $(this).attr("id").substring(6);
        answerQuestion(selectedNumber);
    });
});

/* Note: These question numbers are one based. Array index operations need to take one away from these numbers */
var totalQuestions;
var currentQuestionNumber;

function newQuiz() {
    totalQuestions = quiz.questions.length;
    startTimer();
    currentQuestionNumber = 0;
    moveNext();
}

function answerQuestion(answerNumber) {
    var question = quiz.questions[currentQuestionNumber - 1];
    question.userAnswer = answerNumber;
    showAnswer(question.message, question.userAnswer == question.correctAnswer);
}

function moveNext() {
    if(currentQuestionNumber < totalQuestions){
        currentQuestionNumber++;
        updateDisplayForQuestion(quiz.questions[currentQuestionNumber - 1]);
    }
    else {
        finish();
    }
}

function finish() {
    var score = 0;
    for(var i = 0; i < quiz.questions.length; i++) {
        var question = quiz.questions[i];
        if(question.correctAnswer == question.userAnswer){
            score++;
        }
    }

    var message = "You are finished. You scored " + score + " out of a possible" + quiz.questions.length + ".";
    showFinish(message);
}

function updateDisplayForQuestion(question) {
    $("#questionNumber").text(question.number + "/" + totalQuestions);
    $("#question").text(question.question);
    for(var i = 0; i <= 3; i++){
        $("#answer" + (i+1)).text(question.answers[i].answer);
    }
}

function showAnswer(message, correct) {
    var title = "Correct";
    var type = BootstrapDialog.TYPE_SUCCESS;
    if(!correct){
        title = "Incorrect";
        type = BootstrapDialog.TYPE_DANGER;
    }
    BootstrapDialog.show({
        message: message,
        title: title,
        type: type,
        onhidden: function(dialogRef){
            moveNext();
        },
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: 'OK',
            cssClass: 'btn-primary',
            autospin: false,
            action: function(dialogRef){
                dialogRef.close();
            }
        }]
    });
}

function showFinish(message) {
    BootstrapDialog.show({
        title: "Completed",
        message: message,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: 'OK',
            cssClass: 'btn-primary',
            autospin: false,
            action: function(dialogRef){
                dialogRef.close();
            }
        }]
    });
}

function startTimer() {
    var fiveMinutesLater = new Date();
    fiveMinutesLater.setMinutes(fiveMinutesLater.getMinutes() + 5);
    $("#timer").countdown({until: fiveMinutesLater, format: 'MS', layout: '{mnn}{sep}{snn}'});
}

var quiz =
{
    title: "Music Quiz",
    questions: [
        {
            number: 1,
            question: "Which singer went from 'Rehab' to cover the Zutons' song 'Valerie' with Mark Ronson?",
            correctAnswer: 2,
            userAnswer: 0,
            message: "Amy Winehouse sang 'Valerie' with Mark Ronson.",
            answers: [
                {
                    number: 1,
                    answer: "Adele"
                },
                {
                    number: 2,
                    answer: "Amy Winehouse"
                },
                {
                    number: 3,
                    answer: "Duffy"
                },
                {
                    number: 4,
                    answer: "Lily Allen"
                }
            ]
        },
        {
            number: 2,
            question: "Which band was led by Kurt Cobain until his untimely death?",
            correctAnswer: 4,
            userAnswer: 0,
            message: "Kurt Cobain was the lead singer of Nirvana.",
            answers: [
                {
                    number: 1,
                    answer: "Heaven"
                },
                {
                    number: 2,
                    answer: "Paradise"
                },
                {
                    number: 3,
                    answer: "Utopia"
                },
                {
                    number: 4,
                    answer: "Nirvana"
                }
            ]
        },
        {
            number: 3,
            question: "What was the title of Vanilla Ice's best-selling single?",
            correctAnswer: 2,
            userAnswer: 0,
            message: "Vanilla Ice sang Ice Ice Baby.",
            answers: [
                {
                    number: 1,
                    answer: "Ice Dancing"
                },
                {
                    number: 2,
                    answer: "Ice Ice Baby"
                },
                {
                    number: 3,
                    answer: "Ice to the max"
                },
                {
                    number: 4,
                    answer: "Ice Time"
                }
            ]
        },
        {
            number: 4,
            question: "Who were 'Scary, Baby, Ginger, Posh and Sporty'?",
            correctAnswer: 3,
            userAnswer: 0,
            message: "'Scary, Baby, Ginger, Posh and Sporty' were The Spice Girls.",
            answers: [
                {
                    number: 1,
                    answer: "The Bangles"
                },
                {
                    number: 2,
                    answer: "Girls Aloud"
                },
                {
                    number: 3,
                    answer: "The Spice Girls"
                },
                {
                    number: 4,
                    answer: "The Saturdays"
                }
            ]
        },
        {
            number: 5,
            question: "Fill in the missing word from the Beatles' song '... in the Sky with Diamonds'",
            correctAnswer: 4,
            userAnswer: 0,
            message: "The Beatles sang 'Lucy in the Sky with Diamonds.'",
            answers: [
                {
                    number: 1,
                    answer: "Deidre"
                },
                {
                    number: 2,
                    answer: "Claire"
                },
                {
                    number: 3,
                    answer: "Brenda"
                },
                {
                    number: 4,
                    answer: "Lucy"
                }
            ]
        },
        {
            number: 6,
            question: "Which reggae star sang with The Wailers and had a hit with 'No Woman, No Cry'?",
            correctAnswer: 4,
            userAnswer: 0,
            message: "Bob Marley sang with The Wailers and sang 'No Woman, No Cry.'",
            answers: [
                {
                    number: 1,
                    answer: "Junior Braithwaite"
                },
                {
                    number: 2,
                    answer: "Bunny Wailer"
                },
                {
                    number: 3,
                    answer: "Peter Tosh"
                },
                {
                    number: 4,
                    answer: "Bob Marley"
                }
            ]
        },
        {
            number: 7,
            question: "Which Californian 'surfing' group was founded by the Wilson brothers?",
            correctAnswer: 1,
            userAnswer: 0,
            message: "The Beach Boys were founded by the Wilson brothers.",
            answers: [
                {
                    number: 1,
                    answer: "Beach Boys"
                },
                {
                    number: 2,
                    answer: "Monkees"
                },
                {
                    number: 3,
                    answer: "The Seekers"
                },
                {
                    number: 4,
                    answer: "The New Seekers"
                }
            ]
        },
        {
            number: 8,
            question: "Fill in the state name of this song title 'Sweet Home...' by Lynyrd Skynyrd",
            correctAnswer: 3,
            userAnswer: 0,
            message: "The name of the song is 'Sweet Home Alabama.'",
            answers: [
                {
                    number: 1,
                    answer: "Arkansas"
                },
                {
                    number: 2,
                    answer: "Alaska"
                },
                {
                    number: 3,
                    answer: "Alabama"
                },
                {
                    number: 4,
                    answer: "Arizona"
                }
            ]
        },
    ]
};