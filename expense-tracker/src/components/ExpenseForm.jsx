import { useState } from "react";

function ExpenseForm({ onAdd }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    function handleSubmit(e) {
        e.preventDefault();

        if (description.trim() === "" || amount === "") return;

        onAdd({
            id: Date.now(),
            description: description.trim(),
            amount: Number(amount),
            category: category,
        });

        setDescription("");
        setAmount("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Food</option>
                <option>Transport</option>
                <option>Education</option>
                <option>Bills</option>
                <option>Other</option>
            </select>
            <button type="submit">Add</button>
        </form>
    );
}

export default ExpenseForm;