import Component from "../core/Component.js";

export default class extends Component {
    template() {
        return `
          <fieldset>
              <legend>불러올 주식정보를 체크해주세요.</legend>
              ${Object.keys(this.props.columnList)
                  .map(column => {
                      return `<input type="checkbox" id="${column}" value="${column}">
                <label for="${column}">${this.props.columnList[column] + " "}</label>`;
                  })
                  .join("")}
              <button type="submit" class="submitBtn">주식 정보 불러오기</buttton>
          </fieldset>
        `;
    }

    setEvent() {
        this.$target.addEventListener("click", e => {
            if (e.target.matches(".submitBtn")) this.submit();
        });
    }

    getChecked() {
        const $checkboxes = this.$target.getElementsByTagName("input");
        return [...$checkboxes].filter($ => $.checked).map($ => $.value);
    }

    submit() {
        const selectedColumn = this.getChecked();
        console.log("//todo 이후에 column 갯수 제한");
        console.log("//todo 이후에 check box 유지시키기");
        this.props.requestStock(selectedColumn)
        return
    }
}
