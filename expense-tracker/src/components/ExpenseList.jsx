function ExpenseList({ expenses,onDelete}) {
    return (
<div className="ExpenseList">
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    {expense.description} - R{expense.amount.toFixed(2)} ({expense.category})
                    <button onClick={() => onDelete(expense.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default ExpenseList;