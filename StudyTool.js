var QApair = [
    {Question1: "Answer1"},
    {Question2: "Answer2"},
    ];


var randomNumber;
var data;

function randomNum(){
    randomNumber = Math.floor(Math.random()* QApair.length);
    return randomNumber;
}

function nextQuestion() {
    document.getElementById("StudyQuestions").innerHTML = "";
    if(QApair.length>0){
       data = QApair[randomNum()];
       for(var key in data){
            document.getElementById("StudyQuestions").innerHTML = key;
        }
        document.getElementById("StudyAnswers").innerHTML = "";
    }else {
        document.getElementById("StudyQuestions").innerHTML = "No Questions left. Submit a question below.";
    }
}

function showDiv(){
    for(var key in data){
        document.getElementById("StudyAnswers").innerHTML = data[key];
    }
}

function deleteQuestion(){
    if(QApair.length > 0) {
        QApair.splice(randomNumber, 1);
        data = {};
        document.getElementById("StudyQuestions").innerHTML = "Question Deleted: " + QApair.length + " Questions left.";
        document.getElementById("StudyAnswers").innerHTML = "";
        setTimeout(function () {
            document.getElementById("StudyQuestions").innerHTML = ""
        }, 2000);  //TODO Change to fade in out
    }else{
        // do nothing
    }
    }

function addInfo(){
    myobj = {};
    question = document.getElementById("questionText").value;
    myobj[question] = document.getElementById("answerText").value;
    QApair.push(myobj);
    document.getElementById("questionText").value = "";
    document.getElementById("answerText").value = "";
    document.getElementById("submissionSuccess").innerText = "Submitted";
    setTimeout(function (){document.getElementById("submissionSuccess").innerText = ""}, 1000);  //TODO Change to fade in out
}


