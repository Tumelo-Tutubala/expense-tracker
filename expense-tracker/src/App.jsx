import { useState,useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import FilterBar from "./components/FilterBar";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState("All");

    const visibleExpenses =
        filter === "All"
            ? expenses
            : expenses.filter((expense) => expense.category === filter);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    function addExpense(expense) {
        setExpenses([...expenses, expense]);
    }

    function deleteExpense(id) {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    }

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm onAdd={addExpense} />
            <FilterBar filter={filter} setFilter={setFilter} />
            <ExpenseList expenses={visibleExpenses} onDelete={deleteExpense} />
            <ExpenseSummary expenses={visibleExpenses} />
        </div>
    );
}

export default App;