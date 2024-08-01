const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText === "AC" || buttonText === "DEL") {
      display.value = "";
    } else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Invalid Operation!!!";
      }
    } else {
      display.value += buttonText;
    }
  });
}