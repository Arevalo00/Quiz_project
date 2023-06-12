var quizQuestions = [
    {
       question: 'Commonly used data types DO Not include',
       
       answers:['strings', 'booleans','alerts','numbers'],
       correct:'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ____.',
       
        answers:['qoutes','curly brackets', 'parenthesis','square brackes'],
        correct:'curly brackets',
        
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        
        answers: ['numbers and strings', 'other arrays','booleans', 'all of the above'],
        correct:'all of the above'
    },
    {
        question:'String values must be enclosed within ___ when being assiged to variables.',
        
        answers:['commas','curly brackets','quotes', 'parenthesis'],
        correct:'commas'
    },

]

//these are the html elements being called to the javascript to use 

var startButton = document.getElementById('start')
var scoreBorde = document.getElementById('score')
var timer = document.getElementById('timer')
var questionText = document.getElementById('questionText')
var button = document.createElement("button");

// here are my vars that I made for the project 
var answersIndex = 0
var questionIndex = 0

var score = 0 

//this is the start button for the qui to prompt the frist question 

function startQuiz (){
    console.log (quizQuestions[questionIndex].question)
    questionIndex++
    console.log (questionIndex)
    getQuestion()
}

//this shows when the start button is clicked then the quiz starts 

startButton.addEventListener("click", startQuiz);

console.log (quizQuestions[questionIndex])


//this gets the question to loop in the array by one

function getQuestion(){
questionText.textContent=quizQuestions[questionIndex].question
for (let i = 0; i < quizQuestions[questionIndex].answers.length.button; i++){

    var chocises = document.createElement("button");

    console.log(quizQuestions[questionIndex].answers[i])

    chocises.append('button')

   

  
button.textcontent = questionText.textContent=quizQuestions[answersIndex].answers
}
}


button.append('button')





