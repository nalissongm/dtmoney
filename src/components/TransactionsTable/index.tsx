import { useEffect, useState } from "react";
import { Container } from "./styles";

interface TrasactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TrasactionsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/trasactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((transaction) => (
              <tr>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type !== "deposit" && "-"} R$
                  {transaction.amount}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  );
}
