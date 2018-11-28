// JavaScript Document

//Utilitaires pour modifier le DOM//

function changeTitle(title) {
  document.getElementById ("quest_title").innerHTML = title;
}

function appendAnswer(answer, index) {
  document.getElementById ("quest_answer").insertAdjacentHTML('beforeend', '<input type="radio" name="answer" value="' + index + '" onclick="onAnswerChange(event)" required>' + answer + '<br>');
}

function clearAnswers() {
  document.getElementById ("quest_answer").innerHTML = '';
}

function goNext () {
  currentQuest++;
  render ();
}

function goPrev () {
  currentQuest--;
  render ();
}

function render () {
  clearAnswers();
  
  changeTitle (titles[currentQuest]);
  var i; 
  for (i=0; i < answers[currentQuest].length; i++) {
    appendAnswer(answers[currentQuest][i], i);
  }
  document.getElementById("questions").className = "question"+ currentQuest;
}

//Variables//

var titles = [
  'What statement are you most likely to make about squirrels?', 
  'What set of words come to mind when you think of a coyote?', 
  'When crossing paths with a goose, what do you think?'
];

var answers = [
  ["Squirrels are cute.", "Squirrels are good scavengers", "I don't care about squirrels"],
  ["Majestic, brave, intelligent", "Ferocious, agressive, dangerous", "Cunning, mischevious, opportunistic"],
  ["I don't even notice them", "I might pause and observe their behaviour then move on.", "I try to approach them as nicely as possible", "I run away because I am afraid they will attack me"]
]

var points = [
    [1,3,4,10],
    [2,6,6,9,10],
    [10,2,6,8,4,1]
]

var userAns = [];
var currentAns;

var currentQuest = -1;

//Events//

document.getElementById ("quest_form").onsubmit = function (e){
  e.preventDefault();
  userAns[currentQuest] = currentAns;
  
  goNext ();
}

document.getElementById ("quest_prev").onclick = function (e){
  e.preventDefault();
  goPrev ();
}

function onAnswerChange(e) {
  currentAns = e.target.value;
}

goNext ();
