function ExpenseItem({ expense, onDelete }) {
    return (
        <li className="ExpenseItem">
            <div className="ExpenseItem-info">
                <span className="ExpenseItem-description">{expense.description}</span>
                <span className="ExpenseItem-category">
                    {expense.category}
                    {expense.date && ` · ${expense.date}`}
                </span>
            </div>
            <span className="ExpenseItem-amount">R{expense.amount.toFixed(2)}</span>
            <button
                className="ExpenseItem-delete"
                onClick={() => onDelete(expense.id)}
            >
                Delete
            </button>
        </li>
    );
}

export default ExpenseItem;