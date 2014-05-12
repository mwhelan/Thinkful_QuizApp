$(document).ready(function () {
    var music = new Quiz("Music Quiz");
});

var quiz =
{
    title: "Music Quiz",
    questions: [
        {
            number: 1,
            question: "Which singer went from 'Rehab' to cover the Zutons' song 'Valerie' with Mark Ronson?",
            correctAnswer: 2,
            userAnswer: 0,
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
        }
    ]
}