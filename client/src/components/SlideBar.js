import Component from "../core/Component.js";

export default class extends Component {
  template() {
    return `
        <div class="slideContainer">
            <input type="range" value='0' min='1' max='100' id="myRange" class="slider">
            <p class="value">0<p>
        </div>
    `;
  }

  setEvent() {
    const $slider = this.$target.querySelector(".slider");
    const $value = this.$target.querySelector(".value");

    this.$target.addEventListener("input", (e) => {
      let color = `linear-gradient(90deg,rgb(42, 96, 197) ${$slider.value-20}%,rgb(212, 212, 211) ${$slider.value}%)`;
      $slider.style.background = color;
      $value.innerHTML = $slider.value;
    });
  }
}
