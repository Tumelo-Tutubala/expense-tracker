import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";

function App() {
    const [expenses, setExpenses] = useState([]);

    function addExpense(expense) {
        setExpenses([...expenses, expense]);
    }

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm onAdd={addExpense} />
            <ExpenseList expenses={expenses} />
            <ExpenseSummary expenses={expenses} />
        </div>
    );
}

export default App;