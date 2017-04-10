// Jennifer Cox - u3167197
// Assessment 2: What kind of Investigator are you?

// My list of possible investigators
var investigators = [
    'Sherlock Holmes',
    'Dirty Harry',
    'Miss Marple',
    'Inspector Clouseau',
    'Maxwell Smart',
    'Lord Peter Wimsey',
    'Hercule Poirot',
    'Phryne Fisher',
    'Temperance Brennan'
];

// My list of questions
/*
A question is an object with the following properties:
    text: The text displayed to the person taking the quiz. e.g. "What would be your ideal holiday?"
    answers: an array (list) of answers for this question. Each answer has the following properties:
        text: The text of the answer shown to the person taking the quiz. e.g. Digging up bones in South America
        scores: an array with the same number of elements as there are in the list of investigators. Each element is a number that represents the number of points that choosing this answer adds to the total for the investigator at this position. So, if Miss Marple is the third investigator then the third element of the scores array is added to the player's Miss Marple total. The higher the number the more characteristic of that investigator it is. This array *must* have the same number of elements every time.
*/
var questions = [
    {
        questionText: 'Who would you take with you on your next adventure?',
        // list all the possible answers for this question with the scores assigned to each investigator
        answers: [
           
            {
                answerText: "I work alone, can't trust anyone",
                scores: [1, 5, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                answerText: "An old school friend",
                scores: [0, 0, 5, 0, 0, 2, 3, 0, 1]
            },
            {
                answerText: "Agent 99",
                scores: [0, 0, 0, 0, 5, 0, 0, 0, 0]
            },
            {
                answerText: "Doctor Watson",
                scores: [5, 0, 0, 0, 0, 3, 0, 0, 1]
            },
            {
                answerText: "My trusty manservant, Kato",
                scores: [0, 0, 0, 4, 0, 0, 0, 0, 0]
            },
            {
                answerText: "The local police Constable, as long as he's prepared to listen",
                scores: [1, 0, 2, 0, 0, 4, 5, 3, 1]
            },
            {
                answerText: "My maid and companion, Dot",
                scores: [0, 0, 0, 0, 0, 0, 0, 5, 0]
            },
            {
                answerText: "Agent Seely Booth",
                scores: [0, 0, 0, 0, 0, 0, 0, 0, 5]
            },
            
            {
                answerText: "The ineffable Bunter",
                scores: [1, 0, 0, 0, 0, 5, 0, 0, 0]
            }
        ],
        
        // background image. Ideally I would change this for each question
        image: "map2-sml.jpg"
    },
    {
        questionText: 'What kind of hat would you wear while detecting?',
        /* 
        List of all the answers for this question with the scores assigned to each investigator.
        */
        answers: [
            {
                answerText: "Deerstalker", // SH
                scores: [5, 0, 0, 3, 0, 0, 0, 0, 0]
            },
            {
                answerText: "I wouldn't be seen dead in a hat of any kind", // DH
                scores: [0, 5, 0, 0, 0, 0, 2, 0, 1]
            },
            {
                answerText: "Trilby", // MS
                scores: [0, 0, 0, 0, 5, 0, 0, 0, 0]
            },
            {
                answerText: "Top hat", // LPW
                scores: [3, 0, 0, 0, 0, 5, 2, 0, 0]
            },
            {
                answerText: "No hat, just a touch of brill cream, to keep each hair in the perfect position", // HP
                scores: [0, 0, 0, 0, 2, 0, 5, 0, 0]
            },
            {
                answerText: "Battered felt hat with a fabric rose", // MM
                scores: [0, 0, 5, 0, 0, 0, 0, 0, 0]
            },
            {
                answerText: "A cloche with a peacock feather attached at a jaunty angle", // PF
                scores: [0, 0, 1, 0, 0, 0, 0, 5, 1]
            },
            {
                answerText: "Vintage London fog hat", // IC
                scores: [3, 0, 0, 5, 0, 0, 0, 0, 0]
            },
            {
                answerText: "Wouldn't wear one, they just get in the way",// TB
                scores: [0, 4, 0, 0, 3, 0, 0, 0, 5]
            }
        ],
        image: "map2-sml.jpg"
    },
    {
        questionText: 'How would you choose to spend a lazy Sunday afternoon?',
        // list all the possible answers for this question with the scores assigned to each investigator
        answers: [
            
            {
                answerText: "Shooting practice",
                scores: [1, 5, 0, 0, 2, 0, 0, 0, 3]
            },
            {
                answerText: "Afternoon tea with the Vicar",
                scores: [0, 0, 5, 1, 0, 3, 0, 0, 0]
            },
            {
                answerText: "Karate practice with my manservant",
                scores: [0, 0, 0, 5, 0, 2, 0, 0, 0]
            },
            {
                answerText: "Tied up in a knot with my own shoelaces",
                scores: [0, 0, 0, 4, 5, 0, 0, 0, 0]
            },
            {
                answerText: "Reading the papers at my club",
                scores: [3, 0, 0, 2, 0, 5, 0, 1, 0]
            },
            {
                answerText: "Lunch at a good public house",
                scores: [2, 1, 1, 3, 2, 2, 5, 2, 0]
            },
            {
                answerText: "A leisurely bath and a tryst with a handsome companion, in no particular order",
                scores: [0, 0, 0, 0, 0, 0, 0, 5, 0]
            },
            {
                answerText: "Playing violin in my rooms",
                scores: [5, 0, 0, 0, 0, 0, 0, 0, 1]
            },
            {
                answerText: "Writing a scholarly paper",
                scores: [4, 0, 0, 0, 0, 3, 0, 0, 5]
            }
        ],
        image: "map2-sml.jpg"
    },
    
    {
        questionText: 'What tool or piece of equipment do you consider essential?',
        // list all the possible answers for this question with the scores assigned to each investigator
        answers: [
            {
                answerText: "A pipe and a violin", // SH
                scores: [5, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                answerText: "My .44 Magnum", // DH
                scores: [0, 5, 0, 0, 2, 0, 0, 1, 2]
            },
            {
                answerText: "A big handbag", // MM 3
                scores: [0, 0, 5, 0, 0, 0, 0, 1, 3]
            },
            {
                answerText: "Magnifying glass", // IC 4
                scores: [4, 0, 0, 5, 3, 3, 3, 2, 3]
            },
            {
                answerText: "Shoe phone", // MS
                scores: [0, 0, 0, 0, 5, 0, 0, 0, 0]
            },
            {
                answerText: "My monocle", // LPW
                scores: [0, 0, 0, 0, 0, 5, 0, 0, 0]
            },
            {
                answerText: "A notebook, a sharp pencil and moustache wax", // HP 
                scores: [0, 0, 0, 0, 2, 0, 5, 0, 0]
            },
            {
                answerText: "Lock picking tools and a small gun in a velvet bag", // PF
                scores: [0, 0, 0, 0, 0, 2, 0, 5, 3]
            },
            {
                answerText: "A complete forensics kit", // TB
                scores: [3, 0, 0, 0, 0, 0, 0, 0, 5]
            }
        ],
        image: "map2-sml.jpg"
    },
    
    {
        questionText: 'What\'s your favourite saying?', //the backslash escapes the single quote
        // list all the possible answers for this question with the scores assigned to each investigator
        answers: [
            {
                answerText: "Elementary, my dear Watson",
                scores: [5, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                answerText: "There is a lot of human nature in all of us",
                scores: [0, 0, 5, 0, 0, 0, 0, 0, 0]
            },
            {
                answerText: "Good thinking, 99",
                scores: [0, 0, 0, 0, 5, 0, 0, 0, 0]
            },
            {
                answerText: "It's not magic. It's a logical recreation of events based on evidence.",
                scores: [0, 0, 0, 0, 0, 0, 0, 0, 5]
            },
            {
                answerText: "It is the brain, the little gray cells on which one must rely.",
                scores: [0, 0, 0, 0, 0, 0, 5, 0, 0]
            },
            {
                answerText: "I haven't done half the wicked things I wanted to do, and the ones I have done I haven't done anything like enough.",
                scores: [0, 0, 0, 0, 0, 0, 0, 5, 0]
            },
            {
                answerText: "Wherever trouble turns up, there am I at the bottom of it.",
                scores: [0, 0, 0, 0, 0, 5, 0, 0, 0]
            },
            {
                answerText: "What is the price of one piano, compared to the terrible crime that has been committed here.",
                scores: [0, 0, 0, 5, 0, 0, 0, 0, 0]
            },
            
            {
                answerText: "Go ahead, make my day",
                scores: [0, 5, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        image: "map2-sml.jpg"
    },
    
    {
        questionText: 'What kind of accent do you have?',
        // list all the possible answers for this question with the scores assigned to each investigator
        answers: [
            {
                answerText: "American", // DH TB
                scores: [0, 5, 0, 0, 5, 0, 0, 0, 1]
            },
            {
                answerText: "Australian, with just a touch of upper class British", //PF
                scores: [0, 0, 0, 0, 0, 0, 0, 5, 0]
            },
            {
                answerText: "Belgian, not French!", // HP
                scores: [0, 0, 0, 0, 0, 0, 5, 0, 0]
            },
            {
                answerText: "High class British", // LPW
                scores: [1, 0, 0, 0, 0, 5, 0, 0, 0]
            },
            {
                answerText: "Nasal American", // MS
                scores: [0, 0, 0, 0, 5, 0, 0, 0, 0]
            },
            {
                answerText: "French", // IC
                scores: [0, 0, 0, 5, 0, 0, 3, 0, 0]
            },
            {
                answerText: "English", // MM SH
                scores: [5, 0, 5, 0, 0, 0, 0, 0, 0]
            }
            /*{
                answerText: "American", // TB
                scores: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            
            {
                answerText: "English", // SH
                scores: [5, 0, 5, 0, 0, 0, 0, 0, 0]
            }*/
        ],
        image: "map2-sml.jpg"
    },
    
    {
        questionText: 'What would your ideal holiday be?',
        // list all the possible answers for this question with the scores assigned to each investigator
        answers: [
            {
                answerText: "A trip to Monaco", // IC
                scores: [0, 0, 0, 5, 3, 2, 3, 3, 1]
            },
            {
                answerText: "A peaceful vacation in a quiet English village", // MM
                scores: [1, 0, 5, 0, 0, 3, 0, 0, 0]
            },
            {
                answerText: "Target practice in San Paolo",
                scores: [0, 5, 0, 0, 0, 0, 0, 0, 1] // DH
            },
            {
                answerText: "A stroll across the moors", // SH
                scores: [5, 0, 0, 0, 0, 3, 0, 0, 0]
            },
            {
                answerText: "Digging up an ancient burial site", // TB
                scores: [2, 0, 0, 0, 0, 2, 0, 0, 5]
            },
            {
                answerText: "Solo flight to the Dandenongs", // PF
                scores: [0, 0, 0, 0, 0, 0, 0, 5, 2]
            },
            {
                answerText: "A train journey across Europe", // HP
                scores: [2, 0, 0, 2, 0, 3, 5, 0, 3]
            },
            {
                answerText: "A tour of the Continent", // LPW
                scores: [3, 0, 0, 0, 0, 5, 0, 0, 0]
            },
            
            {
                answerText: "Accidentally ending up in Russia", // MS
                scores: [0, 0, 0, 4, 5, 0, 0, 0, 0]
            }
        ],
        image: "map2-sml.jpg"
    }
];

// Set to -1 so that I can tell no answer has been chosen yet
var selectedAnswer = -1;

// setting the current question to minus 1 so that the first question
// will show when the showQuestion function is called for the first time
var currentQuestion = -1;

var totalScores = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// define a function that will show a question on the HTML page
function showQuestion(question) {
    // mark up the actual question as an H1
    'use strict';
    var myQuestion = '<h1>' + question.questionText + '</h1>',
        i;
    myQuestion += '<ul>';
    
    /* 
        This marks up the answers as an unordered list of radio buttons. It starts with the first answer then keeps adding answers till it get to the last answer available for that question. It also sets up an onClick handler which is passed the index (position number) of the chosen answer. 
    */
    for (i = 0; i < question.answers.length; i += 1) {
        myQuestion += '<li> <input type="radio" name="answer" onClick="chooseAnswer(' + i + ')">' + question.answers[i].answerText + '</input></li>';
    }
    
    // Write the results of the function to the inner 
    // HTML to make it show on the page.
    document.querySelector('#question').innerHTML = myQuestion;
    document.querySelector('#question').style.backgroundImage = "url(images/" + question.image + ")";
    selectedAnswer = -1;
}


function findInvestigator() {
    'use strict';
    
    /*clone the contents of my array so that I can sort it from highest to lowest without losing the positions in the original array */
    var clone = totalScores.slice(0),
        
        investigator1,
        investigator2,
        investigator3,
        i,
        wholeScore = 0,
        percentInvestigator1,
        percentInvestigator2,
        percentInvestigator3,
        yourResult;
    
    // found on W3C, sorts array of numbers in descending order
    clone.sort(function (a, b) {return b - a; });
    
    // works out the position of the 3 largest numbers in the original array 
    for (i = 0; i < clone.length; i += 1) {
        if (totalScores[i] === clone[0]) {
            investigator1 = i;
            break;
        }
    }
    
    // makes sure that investigator2 can't be the same as investigator1
    for (i = 0; i < clone.length; i += 1) {
        if (totalScores[i] === clone[1] && investigator1 !== i) {
            investigator2 = i;
            break;
        }
    }
    
    // makes sure that investigator3 can't be the same as investigator1
    // or investigator2
    for (i = 0; i < clone.length; i += 1) {
        if (totalScores[i] === clone[2] && investigator1 !== i && investigator2 !== i) {
            investigator3 = i;
            break;
        }
    }
    
    for (i = 0; i < totalScores.length; i += 1) {
        wholeScore += totalScores[i];
    }
    
    // works out what percentage of each of the top 3 
    // investigators you are and rounds up to give a whole number
    percentInvestigator1 = Math.round((totalScores[investigator1] / wholeScore) * 100);
    percentInvestigator2 = Math.round((totalScores[investigator2] / wholeScore) * 100);
    percentInvestigator3 = Math.round((totalScores[investigator3] / wholeScore) * 100);
    
    yourResult = '<div id="results"><p>You are ' + percentInvestigator1 + ' percent ';
    yourResult += investigators[investigator1];
    
    if (percentInvestigator2 !== 0) {
        yourResult += '<br> and ' + percentInvestigator2 + ' percent ';
        yourResult += investigators[investigator2];
    }
    
    if (percentInvestigator3 !== 0) {
        yourResult += '<br> and ' + percentInvestigator3 + ' percent ';
        yourResult += investigators[investigator3];
    }
    
    yourResult += '</p><p>Better go start investigating something!</p></div>';
    
    return yourResult;
    
}

// Displays your results and hides the buttonttty
function showResults() {
    'use strict';
    document.querySelector('#question').innerHTML = findInvestigator();
    document.querySelector('#button1').style.display = "none";
}

// Add the scores from the answers to the array of total scores
function collectScores() {
    'use strict';
    var i = 0,
        scores = questions[currentQuestion].answers[selectedAnswer].scores;
    for (i = 0; i < totalScores.length; i += 1) {
        totalScores[i] += scores[i];
    }
}

// Moves the question on to the next question
// When you get to the last question the button text changes to "Get my results!"
// Then changes the onClick to use the function showResults.
function nextQuestion() {
    'use strict';
    
    // Shortcut so I don't have to keep typing out the selector
    var buttonSelector = document.querySelector('#button1');
    
    if (selectedAnswer !== -1) {
        collectScores();
    }
    
    // shows the Next question button till all questions are answered then changes it to Get my results
    currentQuestion += 1;
    
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
        buttonSelector.disabled = true;
        buttonSelector.textContent = "Next question";
    } else {
        buttonSelector.textContent = "Get my results!";
        buttonSelector.style.backgroundColor = "#4b69b5";
        buttonSelector.onclick = showResults;
    }
}

function chooseAnswer(answerNumber) {
    'use strict';
    document.querySelector('#button1').disabled = false;
    selectedAnswer = answerNumber;
}


