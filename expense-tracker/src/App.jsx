import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import FilterBar from "./components/FilterBar";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import MonthlySummary from "./components/MonthlySummary";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const visibleExpenses = (
        filter === "All"
            ? expenses
            : expenses.filter((expense) => expense.category === filter)
    )
        .slice()
        .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    function addExpense(expense) {
        setExpenses([...expenses, expense]);
    }

    function deleteExpense(id) {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    }

    function updateExpense(updated) {
        setExpenses(
            expenses.map((expense) =>
                expense.id === updated.id ? updated : expense
            )
        );
    }

    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            <ExpenseForm onAdd={addExpense} />
            <FilterBar filter={filter} setFilter={setFilter} />
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={deleteExpense}
                onUpdate={updateExpense}
            />
            <ExpenseSummary expenses={visibleExpenses} />
            <MonthlySummary expenses={expenses} />
        </div>
    );
}

export default App;