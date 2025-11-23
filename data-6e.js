const subjectsData6e = {
  maths: { quiz:[], exercises:[], videos:[], bonus:[] },
  francais: { quiz:[], exercises:[], videos:[], bonus:[] },
  histoire: { quiz:[], exercises:[], videos:[], bonus:[] },
  geographie: { quiz:[], exercises:[], videos:[], bonus:[] },
  sciences: { quiz:[], exercises:[], videos:[], bonus:[] }
};

["maths","francais","histoire","geographie","sciences"].forEach(subject=>{
  for(let i=1;i<=100;i++){
    subjectsData6e[subject].quiz.push({
      question:`Quiz ${subject} 6e #${i}: Question réaliste numéro ${i}`,
      choices:["Réponse A","Réponse B","Réponse C"],
      answer:"Réponse A",
      image:`images/${subject}${i}.png`
    });
    subjectsData6e[subject].exercises.push({
      title:`Exercice ${subject} 6e #${i}`,
      content:`Contenu exercice ${subject} numéro ${i}`,
      solution:`Solution exercice ${i}`,
      image:`images/${subject}${i}.png`
    });
    subjectsData6e[subject].videos.push({
      title:`Vidéo ${subject} 6e #${i}`,
      src:`videos/${subject}${i}.mp4`
    });
    subjectsData6e[subject].bonus.push({
      title:`Défi ${subject} 6e #${i}`,
      content:`Mini défi ${subject} numéro ${i}`
    });
  }
});
