import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onUpdate }) {
    if (expenses.length === 0) {
        return <p className="ExpenseList-empty">No expenses yet</p>;
    }

    return (
        <ul className="ExpenseList">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
}

export default ExpenseList;