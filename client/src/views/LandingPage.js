import Component from "../core/Component.js";
import { getExchangeRate } from "../api/api.js";
import SelectStockColumn from "../components/SelectStockColumn.js";

export default class extends Component {
    async setup() {
        this.state = {
            isLoading: true,
            stock: {},
            exchangeRate: {},
            requestedColumn: [],
        };

        this.availableColumn = {
            rank: "시총순위",
            nowPrice: "현재가",
            marketValue: "시가총액",
            operatingProfit: "영업이익",
            EPS: "EPS",
            dividend: "배당금",
            ROE: "ROE",
        };

        const exchangeRate = await getExchangeRate();
        this.setState({ exchangeRate });
    }

    template() {
        return `
          <h1>본격 본인 부자되는 사이트</h1>
          <div data-component="spinInfo"></div>
          <div>${JSON.stringify(this.state.exchangeRate)}</div>
          <div data-component="SelectStockColumn"></div>
          `;
    }

    mounted() {
        const $selectStockColumn = this.$target.querySelector(
            '[data-component="SelectStockColumn"]'
        );

        new SelectStockColumn($selectStockColumn, {
            columnList: this.availableColumn,
            requestStock: this.requestStock.bind(this) ,
        });
    }

    requestStock(columns) {
        console.log("//todo api request");
        this.setState({ requestedColumn: columns });
    }
}
