const btn = document.getElementById("mybutton") as HTMLButtonElement;
const txt = document.getElementById("txt") as HTMLElement;
function setColors() {
  if (btn) {
    btn.style.background = "blue";
    btn.style.color = "white";
  }
  txt ? (txt.style.color = "white") : null;
  document.body.style.background = "green";
}

function resetColor() {
  btn.style.background = "";
  btn.style.color = "";
  txt.style.color = "";
  document.body.style.background = "";
}
btn?.addEventListener("click", (e) => {
  e.stopPropagation()
  setColors();
});

window?.addEventListener("click", () => {
  resetColor();
});
