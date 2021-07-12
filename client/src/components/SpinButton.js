import Component from "../core/Component.js";

export default class SpinButton extends Component {
  timerID;
  delay;

  setup() {
    this.state = {
      cnt: 0,
    };
    this.timerID = null;
    this.delay = 500;
  }

  template() {
    return `
        <button class='plusBtn'>+</button>
        <span>${this.state.cnt}</span>
        <button class='minusBtn'>-</button>
      `;
  }

  setEvent() {
    this.$target.addEventListener("mousedown", (e) => {
      if (e.target.matches(".plusBtn")) {
        this.plusCnt();
      }

      if (e.target.matches(".minusBtn")) {
        this.minusCnt();
      }
    });

    this.$target.addEventListener("mouseup", (e) => {
      if (e.target.matches(".plusBtn") || e.target.matches(".minusBtn")) {
        this.stopCnt();
      }
    });

    this.$target.addEventListener("mouseout", (e) => {
      if (e.target.matches(".plusBtn") || e.target.matches(".minusBtn")) {
        this.stopCnt();
      }
    });
  }

  plusCnt() {
    if (this.delay > 100) this.delay -= 100;
    const timerID = setTimeout(() => {
      this.plusCnt();
    }, this.delay);
    this.timerID = timerID;
    this.setState({ cnt: this.state.cnt + 1 });
  }

  minusCnt() {
    if (this.delay > 100) this.delay -= 100;
    const timerID = setTimeout(() => {
      this.minusCnt();
    }, this.delay);
    this.timerID = timerID;
    this.setState({ cnt: this.state.cnt - 1 });
  }

  stopCnt() {
    if (this.timerID !== null) {
      clearTimeout(this.timerID);
      this.timerID = null;
      this.delay = 500;
    }
  }
}
