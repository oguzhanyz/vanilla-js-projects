let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList[1];
    console.log(style);

    switch (style) {
      case "decrease":
        count--;
        break;
      case "reset":
        count = 0;
        break;
      case "increase":
        count++;
        break;
      default:
        break;
    }
    value.textContent = count;

    if (count > 0) {
      value.style.color = "var(--clr-green-dark)";
    } else if (count < 0) {
      value.style.color = "var(--clr-red-dark)";
    } else {
      value.style.color = "";
    }
  });
});
