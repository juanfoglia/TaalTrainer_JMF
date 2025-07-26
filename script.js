function checkAnswers() {
  const answers = {
    ans1: "de",
    ans2: "de",
    ans3: "het",
    ans4: "de",
    ans5: "het",
    ans6: "het",
    ans7: "het",
    ans8: "de",
    ans9: "de"
  };

  for (let key in answers) {
    const input = document.getElementById(key);
    const userAnswer = input.value.trim().toLowerCase();
    const correct = answers[key];

    if (userAnswer === correct) {
      input.style.backgroundColor = "#c8f7c5"; // groen
    } else {
      input.style.backgroundColor = "#f7c5c5"; // rood
      input.value = `${userAnswer} → ${correct}`;
    }
  }
}
