import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/trasactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 12000,
          type: "deposit",
          category: "Desenvolvimento",
          createdAt: "20/02/2022",
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1000,
          type: "withdraw",
          category: "Casa",
          createdAt: "17/02/2022",
        },
        {
          id: 3,
          title: "Pizza",
          amount: 60,
          type: "withdraw",
          category: "Alimentação",
          createdAt: "02/02/2022",
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
