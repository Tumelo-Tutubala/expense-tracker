function ExpenseList({ expenses }) {
    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    {expense.description} - R{expense.amount} ({expense.category})
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;