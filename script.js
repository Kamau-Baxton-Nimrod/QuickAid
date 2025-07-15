const guides = {
  bleeding: [
    "Apply pressure with a clean cloth.",
    "Raise the injured area above the heart level.",
    "Do not remove embedded objects—apply pressure around them.",
    "Call emergency services if bleeding doesn't stop."
  ],
  burn: [
    "Cool the burn with cool (not ice) water for 10 minutes.",
    "Remove tight items like rings or clothing around the area.",
    "Cover with clean, non-stick bandage.",
    "Do not pop blisters or apply butter/creams."
  ],
  choking: [
    "Ask if they can speak or cough.",
    "If not, perform 5 back blows between the shoulder blades.",
    "Then perform 5 abdominal thrusts (Heimlich).",
    "Repeat until object is dislodged or help arrives."
  ],
  unconscious: [
    "Check for responsiveness and breathing.",
    "Call emergency services immediately.",
    "Begin CPR if the person is not breathing.",
    "Keep monitoring until help arrives."
  ]
};

function showGuide(type) {
  const stepsContainer = document.getElementById("steps");
  stepsContainer.innerHTML = ""; // Clear previous steps

  if (guides[type]) {
    guides[type].forEach((step, index) => {
      const stepElem = document.createElement("p");
      stepElem.textContent = `${index + 1}. ${step}`;
      stepsContainer.appendChild(stepElem);
    });
  }
}
