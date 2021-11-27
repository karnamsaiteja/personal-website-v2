const checkbox = document.getElementById(`checkbox`);

const dark = function (className) {
  document.querySelector(`${className}`).classList.toggle(`dark`);
};

const lightTxt = function (className) {
  document.querySelector(`${className}`).classList.toggle(`light-txt`);
};

const darkBg = function (className) {
  document.querySelector(`${className}`).classList.toggle(`dark-bg`);
};

checkbox.addEventListener(`change`, () => {
  dark(`.section-hero`);
  lightTxt(`.greeting-txt`);
  lightTxt(`.greeting-hello`);
  lightTxt(`.skills-row`);
  darkBg(`.greeting`);
  darkBg(`.skills`);
  dark(`.skill-illustration`);
  dark(`.skill-animation`);
  dark(`.skill-uiux`);
  dark(`.skill-photo`);
  dark(`.cta`);
  darkBg(`.footer`);
  lightTxt(`.cta`);
  lightTxt(`.heading-cta`);
  lightTxt(`.txt-cta`);
  lightTxt(`h2`);
  document.querySelector(`.copyright`).style.color = `#6b758f`;
});
