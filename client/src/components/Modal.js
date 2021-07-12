import Component from "../core/Component.js";

export default class extends Component {
  template() {
    return `
        <button id="open">${this.props.name}</button>
        <div class="modal hidden">
            <div class="modal_overlay"></div>
            <div class="modal_content">
                <h1>${this.props.content}</h1>
                <button id="close">닫기</button>
            </div>
        </div>
        `;
  }

  setEvent() {
      this.$target.addEventListener('click',(e)=>{
          if(e.target.matches("#open")) this.open()
          if(e.target.matches("#close")) this.close()
      })
  }

  open() {
    const $modal = this.$target.querySelector(".modal");
    $modal.classList.remove("hidden")
  }

  close() {
    const $modal = this.$target.querySelector(".modal");
    $modal.classList.add("hidden")
  }
}
