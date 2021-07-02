const questions = {
  area: "gmat",
  level: 3,
  quizlist: [
    {
      quiz: ["error", "mistake", "slide"],
      option: ["transformation", "slip"],
      correct: 2,
    },
    {
      quiz: ["supplier", "nutrition", "provider"],
      option: ["attractive", "supplement"],
      correct: 2,
    },
    {
      quiz: ["door", "window", "house"],
      option: ["packet", "threshold"],
      correct: 2,
    },
    {
      quiz: ["test", "investigation", "examine"],
      option: ["probe", "criticism"],
      correct: 1,
    },
    {
      quiz: ["area", "region", "domain"],
      option: ["territory", "fetish"],
      correct: 1,
    },
    {
      quiz: ["data", "example", "file"],
      option: ["convention", "sampling"],
      correct: 2,
    },
    {
      quiz: ["emotional", "mind", "mental"],
      option: ["consensus", "psychological"],
      correct: 2,
    },
    {
      quiz: ["advanced", "forward", "political"],
      option: ["progressive", "valve"],
      correct: 1,
    },
    {
      quiz: ["balance", "cancel", "delete"],
      option: ["offset", "bath"],
      correct: 1,
    },
    {
      quiz: ["basic", "fundamental", "extreme"],
      option: ["discovery", "radical"],
      correct: 2,
    },
  ],
  version: "7.0.7",
  author: "twinword inc.",
  email: "help@twinword.com",
  result_code: "200",
  result_msg: "Success",
};

const containerDiv = document.querySelector(".container");

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
  let correctOpt = el.correct;
  el.option.forEach((opt, ind) => {
    let option = document.createElement("div");
    option.setAttribute("class", `option${ind + 1} option`);
    option.innerHTML = `${opt}<span></span>`;
    optionDiv.appendChild(option);
  });

  let nextBtn = document.createElement("div");
  nextBtn.setAttribute("class", "next-btn");
  if (ind === questions.quizlist.length - 1) {
    nextBtn.innerHTML = "Submit<span>!</span>";
    nextBtn.addEventListener("click", () => alert("GG"));
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
