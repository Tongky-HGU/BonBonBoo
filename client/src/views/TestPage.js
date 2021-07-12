import Component from "../core/Component.js";
import SpinButton from "../components/SpinButton.js";
import Modal from "../components/Modal.js";

export default class extends Component {
  template() {
    return `
        <div data-component="spinBtn"></div>
        <div data-component="modal-1"></div>
        <div data-component="modal-2"></div>
        `;
  }

  mounted() {
    const $spinBtn = this.$target.querySelector('[data-component="spinBtn"]');
    const $modal_1 = this.$target.querySelector('[data-component="modal-1"]');
    const $modal_2 = this.$target.querySelector('[data-component="modal-2"]');

    new SpinButton($spinBtn);
    new Modal($modal_1,{name:"open1",content:"나중에 template으로 바꾸자"});
    new Modal($modal_2,{name:"open2",content:"222 template으로 바꾸자"});

  }
}
