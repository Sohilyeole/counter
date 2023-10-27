const incre = document.getElementById("in");
const decri = document.getElementById("di");
const reset = document.getElementById("reset");
const display = document.getElementById("f");
let value = 0;

incre.addEventListener("click", () => {
    value = value + 1;
    display.innerText = value;
});
decri.addEventListener("click", decrifun);
function decrifun() {
    if (value > 0) {
        value = value - 1;
        display.innerText = value;
    }
}
reset.addEventListener("click", resetfun);
function resetfun() {
    value = 0;
    display.innerText = value;
}
