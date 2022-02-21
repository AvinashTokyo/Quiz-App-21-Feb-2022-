const quizData = [
  {
    Ques: "Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    Ques:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    Ques: "Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
  },
  {
    Ques: "The 'function' and 'var' are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c",
  },
  {
    Ques:
      "Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    correct: "d",
  },
  {
    Ques: "Which of the following type of a variable is volatile?",
    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable",
    correct: "a",
  },
];

//Register Name
let name1 = "";
document.getElementById("start_now").addEventListener("click", start);
function start(e) {
  e.preventDefault();
  name1 = document.getElementById("name1").value;
  if (name1 == "") {
    namePopup();
  } else {
    document.getElementById("r_name").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById(
      "quiz_name"
    ).innerHTML = `Hello! ${name1} (username)`;
    loadQuiz();
  }
}

//Name Required Pop
function namePopup() {
  document.getElementById("name_required").style.display = "block";
  setTimeout(fun, 2500);
  function fun() {
    document.getElementById("name_required").style.display = "none";
  }
}

//Quiz-Block
let answerEl = document.querySelectorAll(".answer");
let quesEl = document.getElementById("quiz_ques");
let a = document.getElementById("aa");
let b = document.getElementById("bb");
let c = document.getElementById("cc");
let d = document.getElementById("dd");
let currentQuiz = 0;
let score = 0;
function loadQuiz() {
  document.getElementById("change_question").innerHTML = `Question ${
    currentQuiz + 1
  } of ${quizData.length}`;
  deselectAnswers();
  qD = quizData[currentQuiz];
  // alert(quizData[0].a)
  quesEl.innerHTML = qD.Ques;
  a.innerHTML = qD.a;
  b.innerHTML = qD.b;
  c.innerHTML = qD.c;
  d.innerHTML = qD.d;
}

const getSelected = () => {
  let answer;
  answerEl.forEach((e) => {
    if (e.checked) {
      answer = e.id;
    }
  });
  return answer;
};

let result_correct = document.getElementById("result_correct");
let result_name = document.getElementById("result_name");
let result_score = document.getElementById("result_score");

let next = document.getElementById("quiz_next").addEventListener("click", MCQ);
document.getElementById("quiz_submit").addEventListener("click", showAns);

function showAns(e) {
  e.preventDefault();
  validateAns();
}

function validateAns() {
  // e.preventDefault();
  const answer = getSelected();
  if (answer === quizData[currentQuiz].correct) {
    document.getElementById("wellDone").style.display = "block";
    document.getElementById("incorrect").style.display = "none";
  } else {
    document.getElementById("incorrect").style.display = "block";
    document.getElementById(
      "incorrect"
    ).innerHTML = `Wrong Answer! The Correct Answer is ${quizData[currentQuiz].correct}`;
    document.getElementById("wellDone").style.display = "none";
  }
}

function MCQ(e) {
  document.getElementById("incorrect").style.display = "none";
  document.getElementById("wellDone").style.display = "none";
  // deselectAnswers();
  e.preventDefault();
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("result").style.display = "block";
      result_correct.innerHTML = `You Got ${score} of ${quizData.length} Question Correct`;
      result_name.innerHTML = `Name : ${name1}`;
      result_score.innerHTML = `Score : ${score}`;
    }
  }
}

function deselectAnswers() {
  answerEl.forEach((e) => (e.checked = false));
}
