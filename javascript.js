var QApair = [
    {Question1: "Answer1"},
    {Question2: "Answer2"},
    {Question3: "Answer3"},
    {Question4: "Answer4"},
    {Question5: "Answer5"},
    {Question6: "Answer6"}
    ];

var data;

function nextQuestion() {
    var randomNumber = Math.floor(Math.random()* QApair.length);
    data = QApair[randomNumber];
    for(var key in data){
        document.getElementById("StudyQuestions").innerHTML = key;
    }
    document.getElementById("StudyAnswers").innerHTML = "";

}

function showDiv(){
    for(var key in data){
        document.getElementById("StudyAnswers").innerHTML = data[key];
    }
}

function addInfo(){
    myobj = {};
    question = document.getElementById("questionText").value;
    answer = document.getElementById("answerText").value;
    myobj[question] = answer;
    QApair.push(myobj);
    document.getElementById("questionText").value = "";
    document.getElementById("answerText").value = "";
}

