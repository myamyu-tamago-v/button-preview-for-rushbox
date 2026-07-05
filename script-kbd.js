class ButtonHandler {
  constructor(mapping) {
    this.mapping = mapping;
  }

  buttonPress(code, isDown) {
    const buttonDivId = this.mapping[code];
    if (!buttonDivId) return;
    const div = document.getElementById(buttonDivId);
    if (!div) return;
    if (isDown) {
      div.classList.add("active");
      return;
    }
    div.classList.remove("active");
  }

  bind() {
    window.addEventListener("keydown", (ev) => {
      console.log("down", ev.code);
      this.buttonPress(ev.code, true);
    });

    window.addEventListener("keyup", (ev) => {
      console.log("up", ev.code);
      this.buttonPress(ev.code, false);
    });
  }
}
