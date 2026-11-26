import { useState } from "react";

function ExpenseForm({ onAdd }) {
    const today = new Date().toLocaleDateString("en-CA");

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [date, setDate] = useState(today);

    function handleSubmit(e) {
        e.preventDefault();

        if (description.trim() === "" || amount === "" || date === "") return;

        onAdd({
            id: Date.now(),
            description: description.trim(),
            amount: Number(amount),
            category: category,
            date: date,
        });

        setDescription("");
        setAmount("");
        setDate(today);
    }

    return (
        <form className="ExpenseForm" onSubmit={handleSubmit}>
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
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ExpenseForm;