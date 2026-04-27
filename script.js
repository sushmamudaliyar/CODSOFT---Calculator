let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "C") {
      input = "";
      screen.value = "0";
    }

    else if (value === "⌫") {
      input = input.slice(0, -1);
      screen.value = input || "0";
    }

    else if (value === "=") {
      try {
        input = eval(input);
        screen.value = input;
      } catch {
        screen.value = "Error";
        input = "";
      }
    }

    else {
      input += value;
      screen.value = input;
    }
  });
});