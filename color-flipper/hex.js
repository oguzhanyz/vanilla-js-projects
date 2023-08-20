const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  //   console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomColor() {
  let newColor = "#";
  const letters = ["A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 6; i++) {
    let numberOrLetter = Math.floor(Math.random() * 2);
    if (numberOrLetter) {
      // letter case
      newColor += letters[Math.floor(Math.random() * 6)];
    } else {
      // number case
      newColor += Math.floor(Math.random() * 2).toString();
    }
  }
  return newColor;
}
