import ItemPage from "./ItemPage.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    console.log("app")
    new ItemPage($app);
  }
}

new App()