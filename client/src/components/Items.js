import Component from "../core/Component.js";

export default class items extends Component {
  template() {
    const { filteredItems } = this.props;
    return `
            <ul>
                ${filteredItems
                  .map(
                    ({contents, active, seq}) => `
                  <li data-seq="${seq}">
                    ${contents}
                    <button class="togleBtn" style="color:${active ? "#09f" : "#F09"}">
                      ${active ? "활성" : "비활성"}
                    </button>
                    <button class="deleteBtn">삭제</buttton>
                  </li>
                  <a href="/test" data-link>test link</a>
                `
                  )
                  .join("")}
            </ul>
        `;
  }

  setEvent() {
    const {deleteItem, toggleItem} = this.props;
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      console.group(target)
      deleteItem(Number(target.closest('[data-seq]').dataset.seq))
    });

    this.addEvent("click", ".togleBtn", ({ target }) => {
      toggleItem(Number(target.closest('[data-seq]').dataset.seq))
    });
  }
}
