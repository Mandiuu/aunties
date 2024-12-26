const questions = [
    {
      question: "Who is this Cutie?",
      picture: "./images/Ariane.jpeg",
      options: ["Lauren Watson", "Anna Oakes", "Ariane Luthi"],
      answer: "Ariane Luthi",
    },
    {
      question: "Who is this Auntie?",
      picture: "./images/Lauren.png",
      options: ["Lauren Watson", "Anna Oakes", "Ariane Luthi"],
      answer: "Lauren Watson",
    },
    {
      question: "Can you guess who she is?",
      picture: "./images/Natalia.png",
      options: ["Natalia Belizario", "Anna Oakes", "Ariane Luthi"],
      answer: "Natalia Belizario",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const container = document.getElementById("game-container");
    const question = questions[currentQuestionIndex];
  
    container.innerHTML = `
      <p>${question.question}</p>
      <img src="${question.picture}" alt="Person to guess">
      <div id="options-container">
        ${question.options
          .map(
            (option) => `
          <button onclick="selectAnswer('${option}')">${option}</button>
        `
          )
          .join("")}
      </div>
      <button id="next-button" onclick="nextQuestion()" style="display: none;">Next</button>
    `;
  }
  
  function selectAnswer(option) {
    const buttons = document.querySelectorAll("#options-container button");
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
      if (btn.textContent === option) btn.classList.add("selected");
    });
  
    document.getElementById("next-button").style.display = "block";
    if (option === questions[currentQuestionIndex].answer) score++;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const container = document.getElementById("game-container");
    container.innerHTML = `
      <p>You got ${score} out of ${questions.length} correct!</p>
      <button onclick="restartGame()">Play Again</button>
    `;
  }
  
  function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  // Initialize the game
  showQuestion();
  