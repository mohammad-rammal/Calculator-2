const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const specialChars = ["C", "/", "*", "-", "+"];
let output = "";

const calc = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output);
    } else if (btnValue === "C") {
        output = "";
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    result.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const btnValue = e.target.dataset.value;
        calc(btnValue);
    });
});