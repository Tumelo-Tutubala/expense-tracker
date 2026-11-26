import { useState } from "react";

function ExpenseItem({ expense, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(expense.description);
    const [amount, setAmount] = useState(String(expense.amount));
    const [category, setCategory] = useState(expense.category);
    const [date, setDate] = useState(expense.date || "");

    function startEditing() {
        setDescription(expense.description);
        setAmount(String(expense.amount));
        setCategory(expense.category);
        setDate(expense.date || "");
        setIsEditing(true);
    }

    function handleSave() {
        if (description.trim() === "" || amount === "") return;

        onUpdate({
            ...expense,
            description: description.trim(),
            amount: Number(amount),
            category: category,
            date: date,
        });
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <li className="ExpenseItem ExpenseItem-editing">
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Education</option>
                    <option>Bills</option>
                    <option>Other</option>
                </select>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button className="ExpenseItem-save" onClick={handleSave}>
                    Save
                </button>
                <button
                    className="ExpenseItem-cancel"
                    onClick={() => setIsEditing(false)}
                >
                    Cancel
                </button>
            </li>
        );
    }

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
            <button className="ExpenseItem-edit" onClick={startEditing}>
                Edit
            </button>
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