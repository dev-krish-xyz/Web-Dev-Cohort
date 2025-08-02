// Dom elements
    const inputbox = document.querySelector(".input-box");
    const checkbtn = document.querySelector(".check-btn");
    const message = document.querySelector(".message");
    const highscore = document.querySelector(".highscore");
    const countscore = document.querySelector(".score");
    const againbtn = document.querySelector(".again-btn");
    const secretbox = document.querySelector(".secret-box");

    // variables
    let score = 20;

    // functions
    function secretNumber() {
      const randomnumber = Math.round(Math.random() * 20 + 1);
      return randomnumber;
    }
    let number = secretNumber();
    secretbox.textContent = "?";

    // high score
    function countScore() {
      if (score > 0) {
        score--;
        countscore.textContent = `Score: ${score}`;
      }
    }
    countscore.textContent = `Score: ${score}`;

    // event listener
    checkbtn.addEventListener("click", () => {
      let inputnum = Number(inputbox.value);
      // no input
      if (!inputnum) {
        message.textContent = "please enter a number";
      } else if (inputnum > 20 || inputnum < 0) {
        message.textContent = "Enter a number between 1 & 20";
      }
      // if number is higher
      else if (inputnum > number) {
        wrongchoice.play();
        message.textContent = "📈 Too high...";
        countScore();
        inputbox.classList.remove("correct");
        inputbox.classList.add("wrong");
        if (score === 0) {
          inputbox.disabled = true;
          checkbtn.disabled = true;
          message.textContent = "Game Over";
          againbtn.style.backgroundColor = "red";
          loseaudio.play();
        }
      }
      // if number is lower
      else if (inputnum < number) {
        message.textContent = "📉 Too low...";
        wrongchoice.play();
        countScore();
        inputbox.classList.remove("correct");
        inputbox.classList.add("wrong");
        if (score === 0) {
          inputbox.disabled = true;
          checkbtn.disabled = true;
          message.textContent = "⛔ Game Over";
          loseaudio.play();
          againbtn.style.backgroundColor = "red";
        }
      }
      // number is equal
      else if (inputnum === number) {
        secretbox.textContent = number;
        message.style.fontSize = "18px";
        message.textContent = "🥳 Correct guess...";
        winaudio.play();
        checkbtn.disabled = true;
        inputbox.disabled = true;
        document.querySelector("body").style.backgroundColor = "#60b346";
        updateHighScore();
        inputbox.classList.remove("wrong");
        inputbox.classList.add("correct");
        secretbox.classList.add("pop");
        setTimeout(() => inputbox.classList.remove("wrong"), 400);
      }
      setTimeout(() => secretBox.classList.remove("pop"), 600);
    });
    // setting timeout for the wrong class

    // again button
    againbtn.addEventListener("click", () => {
      document.querySelector("body").style.backgroundColor = "";
      number = secretNumber();
      message.textContent = "🤔 Start Guessing...?";
      score = 20;
      countscore.textContent = `Score: ${score}`;
      inputbox.value = "";
      againbtn.style.backgroundColor = "";
      checkbtn.disabled = false;
      inputbox.disabled = false;
      secretbox.textContent = "?";
      inputbox.classList.remove("wrong");
      inputbox.classList.remove("correct");
    });

    let highscoreValue = 0;
    function updateHighScore() {
      if (score > highscoreValue) {
        highscoreValue = score;
        highscore.textContent = `High Score: ${highscoreValue}`;
      }
    }

    // audios
    const loseaudio = document.createElement("audio");
    const winaudio = document.createElement("audio");
    const wrongchoice = document.createElement("audio");
    loseaudio.src = "musics/gamebeep.mp3";
    winaudio.src = "musics/wow-trim.mp3";
    wrongchoice.src = "musics/wrong-choice-trim.mp3";

    // enter key response
    inputbox.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkbtn.click();
      }
    });

    const okay = document.querySelector();
