const questions = [
    {
        question:"पवित्र का सही संधि विच्छेद का चयन कीजिए।",
        answers: [
            { text: "पव् + इत्र", correct: false},
            { text: "पवः + इत्र", correct: false},
            { text: "पौ + इत्र", correct: false},
            { text: "पो + इत्र", correct: true},
        ] 
    },

    {
        question:"दिगम्बर का सही संधि विच्छेद का चयन कीजिए।",
        answers: [
            { text: "दि + गम्बर", correct: false},
            { text: " दिगम्ब + र", correct: false},
            { text: "दिग् + अम्बर", correct: false},
            { text: "दिक् + अम्बर", correct: true},
        ] 
    },

    {
        question:"षडानन का सही संधि विच्छेद का चयन कीजिए।",
        answers: [
            { text: "षडा + आनन", correct: false},
            { text: "षड् + आनन", correct: false},
            { text: "षठ् + आनन", correct: false},
            { text: "षट् + आनन", correct: true},
        ] 
    },

    {
        question:"रामायण का सही संधि विच्छेद का चयन कीजिए।",
        answers: [
            { text: "राम + अण", correct: false},
            { text: "राम + आयन", correct: false},
            { text: "राम + अयन", correct: true},
            { text: "रामा + यम्", correct: false},
        ] 
    },

    {
        question:"इत्यैवम का सही संधि विच्छेद का चयन कीजिए।",
        answers: [
            { text: "इत्य + एवम्", correct: false},
            { text: "इतिम्+ यम", correct: false},
            { text: "इति + एवम", correct: true},
            { text: "इति + इयम", correct: false},
        ] 
    },

    {
        question:"जिस समास के दोनों पद अप्रधान होते है, वहॉ पर कौन-सा समास होता है ?",
        answers: [
            { text: "द्वन्द्व समास", correct: false},
            { text: "द्विगु समास", correct: false},
            { text: "तत्पुरूष समास", correct: false},
            { text: "बहुब्रीहि समास", correct: true},
        ] 
    },

    {
        question:"किस समास के दोनों शब्दों को समानाधिकरण होने पर कर्मधारय समास होता है ?",
        answers: [
            { text: "तत्पुरूष", correct: true},
            { text: "द्वन्द्व", correct: false},
            { text: "द्विगु", correct: false},
            { text: "बहुब्रीहि", correct: false},
        ] 
    },

    {
        question:"किस में सही सामासिक पद हैं ?",
        answers: [
            { text: "पुष्पधन्वी", correct: false},
            { text: "दिवारात्रि", correct: true},
            { text: "त्रिलोकी", correct: false},
            { text: "मन्त्रिपरिषद्", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित शब्दों में से द्वन्द्व समास किस शब्द में है ?",
        answers: [
            { text: "पाप-पुण्य", correct: true},
            { text: "धडाधड", correct: false},
            { text: "कला प्रवीण", correct: false},
            { text: "त्रिभुवन", correct: false},
        ] 
    },

    {
        question:"‘कु‘ उपसर्ग से बना देषज शब्द कौनसा है ?",
        answers: [
            { text: "कुकर्म", correct: false},
            { text: "कुठौर", correct: true},
            { text: "कुरूप", correct: false},
            { text: "कुप्रबंध", correct: false},
        ] 
    },

    {
        question:"‘सत्कार‘ में उपसर्ग है ?",
        answers: [
            { text: "सत", correct: false},
            { text: "सत्", correct: true},
            { text: "सम्", correct: false},
            { text: "स", correct: false},
        ] 
    },

    {
        question:"किस शब्द में उपसर्ग का उपयोग नहीं किया गया है ?",
        answers: [
            { text: "अच्छाई", correct: true},
            { text: "अनुच्छेद", correct: false},
            { text: "परिच्छेद", correct: false},
            { text: "उच्छवास", correct: false},
        ] 
    },

    {
        question:"‘अनुचित‘ शब्द में उपसर्ग है ?",
        answers: [
            { text: "अन्", correct: true},
            { text: "अनु", correct: false},
            { text: "अनू", correct: false},
            { text: "अन", correct: false},
        ] 
    },

    {
        question:"‘सु‘ उपसर्ग किस शब्द में हैं ?",
        answers: [
            { text: "सुख", correct: true},
            { text: "सुप्त", correct: false},
            { text: "स्वागत", correct: false},
            { text: "सुंदर", correct: false},
        ] 
    },

    {
        question:"अजर का  पर्यायवाची शब्द .........है ",
        answers: [
            { text: "दैत्य", correct: false},
            { text: "दानव", correct: false},
            { text: "किन्नर", correct: false},
            { text: "सुर", correct: true},
        ] 
    },

    {
        question:"तरणि का  पर्यायवाची शब्द .........है",
        answers: [
            { text: "सूर्य", correct: true},
            { text: "नाव", correct: false},
            { text: "युवती", correct: false},
            { text: "नदी", correct: false},
        ] 
    },

    {
        question:"दिनकर का  पर्यायवाची शब्द .........है",
        answers: [
            { text: "निषाचर", correct: false},
            { text: "प्रभाकर", correct: true},
            { text: "सुधाकर", correct: false},
            { text: "विभाकर", correct: false},
        ] 
    },

    {
        question:"कानन का  पर्यायवाची शब्द .........है",
        answers: [
            { text: "मधुकर", correct: false},
            { text: "पुष्प", correct: false},
            { text: "विहिप", correct: false},
            { text: "वन", correct: true},
        ] 
    },

    {
        question:"प्रसून का  पर्यायवाची शब्द .........है",
        answers: [
            { text: "वृक्ष", correct: false},
            { text: "पुष्प", correct: true},
            { text: "चन्द्रमा", correct: false},
            { text: "अग्नि", correct: false},
        ] 
    },

    {
        question:"कर्तृवाच्य कहलाता है।",
        answers: [
            { text: "जिन क्रियाओं में भाव प्रधान हो", correct: false},
            { text: "जिन क्रियाओं में शब्द प्रधान हो", correct: false},
            { text: "जहॉ क्रिया का प्रयोग वाक्य में कर्ता के लिंग व वचन के अनुसार किया जाता है।", correct: true},
            { text: "जहॉ क्रिया का प्रयोग वाक्य में कर्म मे लिंग व वचन के अनुसार किया जाता है।", correct: false},
        ] 
    },

    {
        question:"हमसे किताब पढी जाती है। इस वाक्य में कौन-सा वाच्य है ?",
        answers: [
            { text: "कर्तृवाच्य", correct: false},
            { text: "कर्मवाच्य", correct: true},
            { text: "भाववाच्य", correct: false},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"Which sentence is correctly punctuated?",
        answers: [
            { text: "I went to the store, and bought some milk.", correct: false},
            { text: "I went to the store and bought some milk.", correct: true},
            { text: "I went to the store; and bought some milk.", correct: false},
            { text: "I went to the store and, bought some milk.", correct: false},
        ] 
    },

    {
        question:"Choose the correct plural form of “child.”",
        answers: [
            { text: "Childs", correct: false},
            { text: "Childrens", correct: false},
            { text: "Childs", correct: false},
            { text: "Children", correct: true},
        ] 
    },

    {
        question:"Which sentence is grammatically correct?",
        answers: [
            { text: "I seen him yesterday.", correct: false},
            { text: "I see him yesterday.", correct: false},
            { text: "I have seen him yesterday.", correct: false},
            { text: "I saw him yesterday.", correct: true},
        ] 
    },

    {
        question:"What is the superlative form of the adjective “big”?",
        answers: [
            { text: "Bigger", correct: false},
            { text: "Bigly", correct: false},
            { text: "Biggest", correct: true},
            { text: "More big", correct: false},
        ] 
    },

    {
        question:"Which sentence is written in the active voice?",
        answers: [
            { text: "The book was read by me.", correct: false},
            { text: "The book has been read by me.", correct: false},
            { text: "I read the book.", correct: true},
            { text: "The book is read by me.", correct: false},
        ] 
    },

    {
        question:"Choose the correct possessive form of the noun “cat.”",
        answers: [
            { text: "Cats’", correct: false},
            { text: "Cats’s", correct: false},
            { text: "Cat’s", correct: true},
            { text: "Cat’", correct: false},
        ] 
    },

    {
        question:"Which sentence contains a coordinating conjunction?",
        answers: [
            { text: "I went to the store because I needed milk.", correct: false},
            { text: "I went to the store, yet I forgot to buy milk.", correct: false},
            { text: "I went to the store after I bought milk.", correct: false},
            { text: " I went to the store so I could buy milk.", correct: true},
        ] 
    },

    {
        question:"What is the past participle of the verb “swim?",
        answers: [
            { text: "Swam", correct: false},
            { text: "Swum", correct: true},
            { text: "Swimmed", correct: false},
            { text: "Swimming", correct: false},
        ] 
    },

    {
        question:"Choose the correct word to complete the sentence: “Please ______ the door when you leave.",
        answers: [
            { text: "Close", correct: true},
            { text: "Closed", correct: false},
            { text: "Closes", correct: false},
            { text: "Closing", correct: false},
        ] 
    },

    {
        question:"Which sentence is an example of a compound sentence?",
        answers: [
            { text: "The dog barked loudly.", correct: false},
            { text: "She likes to read books.", correct: false},
            { text: "I ate dinner and went to bed.", correct: true},
            { text: "He runs fast.", correct: false},
        ] 
    },

    {
        question:"What is the comparative form of the adverb “quickly”?",
        answers: [
            { text: "More quickly", correct: false},
            { text: "Quicker", correct: false},
            { text: "Quicklier", correct: false},
            { text: "Most quickly", correct: true},
        ] 
    },

    {
        question:"Choose the correct indefinite article for the word “umbrella.”",
        answers: [
            { text: "A", correct: true},
            { text: "An", correct: false},
            { text: "The", correct: false},
            { text: "None of the above", correct: false},
        ] 
    },

    {
        question:"Which sentence contains a direct object?",
        answers: [
            { text: "She is singing.", correct: false},
            { text: "The bird flew away.", correct: false},
            { text: "They played soccer.", correct: true},
            { text: " I am tired.", correct: false},
        ] 
    },

    {
        question:"What is the present participle of the verb “eat”?",
        answers: [
            { text: "Eat", correct: false},
            { text: " Ate", correct: false},
            { text: "Eaten", correct: false},
            { text: "Eating", correct: true},
        ] 
    },

    {
        question:"Choose the correct word to complete the sentence: “I _______ a new car next week.”",
        answers: [
            { text: "Will buy", correct: true},
            { text: "Am buying", correct: false},
            { text: "Bought", correct: false},
            { text: "Buys", correct: false},
        ] 
    },

    {
        question:"Which sentence is written in the passive voice?",
        answers: [
            { text: "She wrote a letter.", correct: false},
            { text: "The letter was written by her.", correct: true},
            { text: "The letter is being written by her.", correct: false},
            { text: "She is writing a letter.", correct: false},
        ] 
    },

    {
        question:"Which sentence contains a prepositional phrase?",
        answers: [
            { text: "I am tired.", correct: false},
            { text: "She likes to swim.", correct: false},
            { text: "The book is on the table.", correct: true},
            { text: "He runs fast.", correct: false},
        ] 
    },

    {
        question:"Choose the correct word to complete the sentence: “They _______ a lot of money.”",
        answers: [
            { text: "Have", correct:true},
            { text: "Had", correct: false},
            { text: "Has", correct: false},
            { text: "Having", correct: false},
        ] 
    },

    {
        question:"Which sentence contains an adverbial clause?",
        answers: [
            { text: "She is tall.", correct: false},
            { text: "He drives a car.", correct: false},
            { text: "I will go if it stops raining.", correct: true},
            { text: "They ate pizza for dinner.", correct: false},
        ] 
    },

    {
        question:"What is the correct comparative form of the adjective “beautiful”?",
        answers: [
            { text: "More beautiful", correct: true},
            { text: "Beautifuller", correct: false},
            { text: "Beautifuler", correct: false},
            { text: "Most beautiful", correct: false},
        ] 
    },

    {
        question:"What is the plural form of the word “mouse”",
        answers: [
            { text: "Mouses", correct: false},
            { text: "Mice", correct: true},
            { text: "Mouse’s", correct: false},
            { text: "Mices", correct: false},
        ] 
    },

    {
        question:"Which sentence contains a gerund?",
        answers: [
            { text: "She danced gracefully.", correct: false},
            { text: "Running is his favorite hobby.", correct: true},
            { text: "They arrived late.", correct: false},
            { text: "The sun is shining.", correct: false},
        ] 
    },

    {
        question:"What is the superlative form of the adverb “quickly”?",
        answers: [
            { text: "More quickly", correct: false},
            { text: "Quicker", correct: false},
            { text: "Quickliest", correct: false},
            { text: "Most quickly", correct: true},
        ] 
    },

    {
        question:"Which sentence contains a coordinating conjunction?",
        answers: [
            { text: "I love ice cream, but I’m lactose intolerant.", correct: true},
            { text: "I love ice cream, because it’s delicious.", correct: false},
            { text: " I love ice cream, so I ate a lot.", correct: false},
            { text: "I love ice cream, after dinner.", correct: false},
        ] 
    },

    {
        question:"Which sentence contains a direct object?",
        answers: [
            { text: "They are playing in the park.", correct: false},
            { text: "I am feeling happy.", correct: false},
            { text: "She baked cookies.", correct: true},
            { text: "The cat is sleeping.", correct: false},
        ] 
    },

    {
        question:"What is the present participle of the verb “sleep”?",
        answers: [
            { text: "Sleep", correct: false},
            { text: "Slept", correct: false},
            { text: "Sleeped", correct: false},
            { text: "Sleeping", correct: true},
        ] 
    },

    {
        question:"Which sentence contains a gerund?",
        answers: [
            { text: "She plays the piano.", correct: false},
            { text: "Swimming is his favorite sport.", correct: true},
            { text: "We arrived early.", correct: false},
            { text: "The sun shines brightly.", correct: false},
        ] 
    },

    {
        question:"What is the superlative form of the adverb “quickly”?",
        answers: [
            { text: "More quickly", correct: false},
            { text: "Quickest", correct: true},
            { text: "Quicklier", correct: false},
            { text: "Most quickly", correct: false},
        ] 
    },

    {
        question:"Choose the correct word to complete the sentence: “I _______ seen him before.”",
        answers: [
            { text: "Never", correct: true},
            { text: "Ever", correct: false},
            { text: "Yet", correct: false},
            { text: "Already", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 