// This gives the code variable to track the score
let score = 0;

const getResult = () => {
  cleanUp();
//   Create and call as many as you need
  q1RightAns();
  q2RightAns();
//   Calls score function to tally the score
  getScore();
};

const cleanUp = () => {
//   Reset the score if user submits another quiz
  let resetScore = score = 0;
//   This clears the score box
  let scoreBox = document.querySelector("#scoreBox");
  scoreBox.style.borderStyle = null;
  scoreBox.style.padding = null;
  scoreBox.style.backgroundColor = null;
//   This clears the right answers boxes
  let rightBoxQ1 = document.querySelector("#right1");
  rightBoxQ1.style.borderStyle = null;
  rightBoxQ1.style.padding = null;
  rightBoxQ1.style.backgroundColor = null;
  let rightBoxQ2 = document.querySelector("#right2");
  rightBoxQ2.style.borderStyle = null;
  rightBoxQ2.style.padding = null;
  rightBoxQ2.style.backgroundColor = null;
//   This clears the wrong answers boxes
  let wrongBoxQ1 = document.querySelector("#wrong1");
  wrongBoxQ1.style.borderStyle = null;
  wrongBoxQ1.style.padding = null;
  wrongBoxQ1.style.backgroundColor = null;
  let wrongBoxQ2 = document.querySelector("#wrong2");
  wrongBoxQ2.style.borderStyle = null;
  wrongBoxQ2.style.padding = null;
  wrongBoxQ2.style.backgroundColor = null;
};

const q1RightAns = () => {
//   This get the value true or false back
  let a = document.getElementById("q1-a").checked;
  let b = document.getElementById("q1-b").checked;
  let c = document.getElementById("q1-c").checked;
  let d = document.getElementById("q1-d").checked;
  let e = document.getElementById("q1-e").checked;
  let f = document.getElementById("q1-f").checked;
//   This checks if answer given true or false
  if (a === false && b === false && c === false && d === true && e === false && f === true) {
//     If true statement gets printed to doc and wrong answer turns blank
    let q1Correct = "You are correct!";
    document.getElementById("q1RightAns").innerHTML = q1Correct;
    let rightBox = document.querySelector("#right1");
    rightBox.style.borderStyle = "outset";
    rightBox.style.padding = "10px 10px 10px 10px";
    rightBox.style.backgroundColor = "green";
    document.getElementById("q1WrongAns").innerHTML = "";
//     If true score is increased by 1
    let q1Score = ++score;
  } else {
//     If not true calls wrong function
    q1WrongAns();
  }
};

const q1WrongAns = () => {
//   Prints the correct solution to the doc
  let q1Solution = "Try Again. The correct answers are D and F, Ethernet defines both physical and data-link protocols, PPP is a data-link protocol, IP is a network layer protocol, and SMTP and HTTP are application layer protocols.";
  document.getElementById("q1WrongAns").innerHTML = q1Solution;
  document.getElementById("q1RightAns").innerHTML = "";
  let wrongBox = document.querySelector("#wrong1");
  wrongBox.style.borderStyle = "inset";
  wrongBox.style.padding = "10px 10px 10px 10px";
  wrongBox.style.backgroundColor = "red";
};

const q2RightAns = () => {
//   This get the value true or false back
  let a = document.getElementById("q2-a").checked;
  let b = document.getElementById("q2-b").checked;
  let c = document.getElementById("q2-c").checked;
  let d = document.getElementById("q2-d").checked;
  let e = document.getElementById("q2-e").checked;
  let f = document.getElementById("q2-f").checked;
  let g = document.getElementById("q2-g").checked;
//   This checks if answer given true or false
  if (a === true && b === false && c === false && d === false && e === false && f === false && g === true) {
//     If true statement gets printed to doc and wrong answer turns blank
    let q2Correct = "You are correct!";
    document.getElementById("q2RightAns").innerHTML = q2Correct;
    let rightBox = document.querySelector("#right2");
    rightBox.style.borderStyle = "outset";
    rightBox.style.padding = "10px 10px 10px 10px";
    rightBox.style.backgroundColor = "green";
    document.getElementById("q2WrongAns").innerHTML = "";
//     If true score is increased by 1
    let q2Score = ++score;
  } else {
//     If not true calls wrong function
    q2WrongAns();
  }
};

const q2WrongAns = () => {
//   Prints the correct solution to the doc
  let q2Solution = "Try Again. The correct answers are A and G, IP is a network layer protocol, TCP and UDP are transport layer protocols, and SMTP and HTTP are application layer protocols.";
  document.getElementById("q2WrongAns").innerHTML = q2Solution;
  document.getElementById("q2RightAns").innerHTML = "";
  let wrongBox = document.querySelector("#wrong2");
  wrongBox.style.borderStyle = "inset";
  wrongBox.style.padding = "10px 10px 10px 10px";
  wrongBox.style.backgroundColor = "red";
};

const getScore = () => {
//   Change score to divide by number of questions
  let totalScore = score / 2 * 100;
  if (totalScore === 100) {
    let topScore = `Great Job you scored a ${totalScore}%`
    document.getElementById("theScore").innerHTML = topScore;
    let scoreBox = document.querySelector("#scoreBox");
    scoreBox.style.borderStyle = "outset";
    scoreBox.style.padding = "10px 10px 10px 10px";
    scoreBox.style.backgroundColor = "green";
  } else {
    let lowScore = `Keep studying & review the solutions. Your score: ${totalScore}%`
    document.getElementById("theScore").innerHTML = lowScore;
    let scoreBox = document.querySelector("#scoreBox");
    scoreBox.style.borderStyle = "inset";
    scoreBox.style.padding = "10px 10px 10px 10px";
    scoreBox.style.backgroundColor = "red";
  }
};

const reset = () => {
//   This clears the doc
  document.getElementById("q1WrongAns").innerHTML = "";
  document.getElementById("q1RightAns").innerHTML = "";
  document.getElementById("q2WrongAns").innerHTML = "";
  document.getElementById("q2RightAns").innerHTML = "";
//   This resets the value of score and clears it from the doc
  document.getElementById("theScore").innerHTML = "";
  let resetScore = score = 0;
//   This clears the score box
  let scoreBox = document.querySelector("#scoreBox");
  scoreBox.style.borderStyle = null;
  scoreBox.style.padding = null;
  scoreBox.style.backgroundColor = null;
//   This clears the right answers boxes
  let rightBoxQ1 = document.querySelector("#right1");
  rightBoxQ1.style.borderStyle = null;
  rightBoxQ1.style.padding = null;
  rightBoxQ1.style.backgroundColor = null;
  let rightBoxQ2 = document.querySelector("#right2");
  rightBoxQ2.style.borderStyle = null;
  rightBoxQ2.style.padding = null;
  rightBoxQ2.style.backgroundColor = null;
//   This clears the wrong answers boxes
  let wrongBoxQ1 = document.querySelector("#wrong1");
  wrongBoxQ1.style.borderStyle = null;
  wrongBoxQ1.style.padding = null;
  wrongBoxQ1.style.backgroundColor = null;
  let wrongBoxQ2 = document.querySelector("#wrong2");
  wrongBoxQ2.style.borderStyle = null;
  wrongBoxQ2.style.padding = null;
  wrongBoxQ2.style.backgroundColor = null;
//   This un-checks Questions-1
  document.getElementById("q1-a").checked = false;
  document.getElementById("q1-b").checked = false;
  document.getElementById("q1-c").checked = false;
  document.getElementById("q1-d").checked = false;
  document.getElementById("q1-e").checked = false;
  document.getElementById("q1-f").checked = false;
//   This un-checks Questions-2
  document.getElementById("q2-a").checked = false;
  document.getElementById("q2-b").checked = false;
  document.getElementById("q2-c").checked = false;
  document.getElementById("q2-d").checked = false;
  document.getElementById("q2-e").checked = false;
  document.getElementById("q2-f").checked = false;
  document.getElementById("q2-g").checked = false;
};