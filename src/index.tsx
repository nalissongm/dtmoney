import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 12000,
          type: "deposit",
          category: "Desenvolvimento",
          createdAt: new Date("2022-02-22 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1000,
          type: "withdraw",
          category: "Casa",
          createdAt: new Date("2022-02-07 10:00:00"),
        },
        {
          id: 3,
          title: "Pizza",
          amount: 60,
          type: "withdraw",
          category: "Alimentação",
          createdAt: new Date("2022-02-02 19:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/trasactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
