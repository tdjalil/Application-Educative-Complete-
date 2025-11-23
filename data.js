// Génère 100 exercices par matière
function generateExercises(matiere) {
  let list = [];
  for (let i = 1; i <= 100; i++) {
    list.push({
      title: matiere.toUpperCase() + " — Exercice " + i,
      content: "Résous la question n°" + i + " en " + matiere + "."
    });
  }
  return list;
}

// Base de données complète
const DB = {
  "6e": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  },
  "5e": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  },
  "4e": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  },
  "3e": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  },
  "2nde": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  },
  "1ere": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  },
  "Tale": {
    maths: generateExercises("maths"),
    francais: generateExercises("français"),
    histoire: generateExercises("histoire"),
    geo: generateExercises("géographie"),
    sciences: generateExercises("sciences")
  }
};
