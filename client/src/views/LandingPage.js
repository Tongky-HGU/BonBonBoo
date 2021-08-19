import Component from "../core/Component.js";
import {getExchangeRate} from "../api/api.js";

export default class extends Component {
  async setup() {
    this.state = {
      isLoading: true,
      stock: {},
      exchangeRate: {},
    };

    const exchangeRate = await getExchangeRate()
    this.setState({exchangeRate})
  }

  template() {
    return `
      <h1>본격 본인 부자되는 사이트</h1>
      <div data-component="spinInfo"> 
      <div>${JSON.stringify(this.state.exchangeRate)}<div>
      `;
  }
}
