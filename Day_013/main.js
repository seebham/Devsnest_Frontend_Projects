var questions = null;

const options = {
  method: "GET",
  url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
  params: { level: "3", area: "sat" },
  headers: {
    "x-rapidapi-key": "260c87c233msh6a5215f4ae9e80dp13f2fbjsn3db32a5584c9",
    "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    questions = response.data;
    renderQuestions();
    let startBtn = document.getElementById("start-btn");
    startBtn.innerText = "Start";
    startBtn.setAttribute("disabled", false);
  })
  .catch(function (error) {
    console.error(error);
  });

const containerDiv = document.querySelector(".container");
var score = 0;

{
  /* DOM Required to append to Container for every Question

<section id="1">
  <div class="ques-no">
    Question 1/<span>10</span>
  </div>
  <div class="q-words">error • mistake • slide</div>
  <div class="options">
    <div class="ques">Above words are associated to?</div>
    <div class="option1 option">
      transformation<span></span>
    </div>
    <div class="option2 option">
      slip<span></span>
    </div>
  </div>
  <div class="next-btn">
    Next &nbsp;<span>🠒</span>
  </div>
</section>; 
*/
}

const validateAnswer = (e, options, correctOpt) => {
  if (e.target.innerText === correctOpt) {
    e.target.classList.add("correct-option");
    score++;
  } else {
    options.childNodes.forEach((ch) => {
      if (ch.innerText === correctOpt) ch.classList.add("correct-option");
      else ch.classList.add("wrong-option");
    });
  }
};

function renderQuestions() {
  questions.quizlist.forEach((el, ind) => {
    let section = document.createElement("section");
    section.setAttribute("id", ind);
    let quesNo = document.createElement("div");
    quesNo.setAttribute("class", "ques-no");
    quesNo.innerHTML = `Question ${ind + 1}/<span>${
      questions.quizlist.length
    }</span>`;
    let qWords = document.createElement("div");
    qWords.setAttribute("class", "q-words");
    let qs = concatit(el.quiz);
    qWords.innerHTML = qs;
    let optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "ques");
    optionDiv.innerText = "Above words are associated to?";
    let correctOpt = el.option[el.correct - 1];
    let options = document.createElement("div");
    el.option.forEach((opt, ind) => {
      let option = document.createElement("div");
      option.setAttribute("class", `option${ind + 1} option`);
      option.innerHTML = `${opt}<span></span>`;
      option.addEventListener("click", (e) =>
        validateAnswer(e, options, correctOpt)
      );
      options.appendChild(option);
    });
    optionDiv.appendChild(options);

    let nextBtn = document.createElement("div");
    nextBtn.setAttribute("class", "next-btn");
    if (ind === questions.quizlist.length - 1) {
      nextBtn.innerHTML = "Submit<span>!</span>";
      nextBtn.addEventListener("click", () => alert(`Your Score: ${score}`));
    } else {
      nextBtn.innerHTML = "Next &nbsp;<span>🠒</span>";
      nextBtn.addEventListener("click", () => (location.href = `#${ind + 1}`));
    }

    section.appendChild(quesNo);
    section.appendChild(qWords);
    section.appendChild(optionDiv);
    section.appendChild(nextBtn);
    containerDiv.appendChild(section);
  });
}
