export default class Component {
  $parent;
  $target;
  state;
  props;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$target = document.createElement("div");
    this.$parent.appendChild(this.$target);
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  mounted() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (e) => {
      if (!isTarget(e.target)) return false;
      callback(e);
    });
  }
}
