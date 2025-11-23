let level = "";
let subject = "";
let indexEx = 0;
let currentList = [];

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function chooseLevel(lvl) {
  level = lvl;
  showPage("subjects");
}

function chooseSubject(sub) {
  subject = sub;
  indexEx = 0;

  currentList = DB[level][subject];

  showPage("exercisePage");
  loadExercise();
}

function loadExercise() {
  let ex = currentList[indexEx];

  document.getElementById("exTitle").textContent = ex.title;
  document.getElementById("exContent").textContent = ex.content;

  document.getElementById("progressFill").style.width =
    ((indexEx + 1) / currentList.length) * 100 + "%";
}

function nextExercise() {
  indexEx++;
  if (indexEx >= currentList.length) indexEx = 0;
  loadExercise();
}
