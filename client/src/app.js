import ItemPage from "./ItemPage.js";
import SpinButton from "./components/SpinButton.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new ItemPage($app);
    new SpinButton($app);
    new SpinButton($app);
    new SpinButton($app);
  }
}

new App();
