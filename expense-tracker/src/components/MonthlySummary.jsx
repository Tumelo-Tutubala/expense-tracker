function MonthlySummary({ expenses }) {
    const totals = {};

    expenses.forEach((expense) => {
        if (!expense.date) return;
        const month = expense.date.slice(0, 7); // "2026-11"
        totals[month] = (totals[month] || 0) + expense.amount;
    });

    const months = Object.keys(totals).sort().reverse();

    if (months.length === 0) return null;

    const max = Math.max(...months.map((month) => totals[month]));

    function formatMonth(month) {
        const [year, number] = month.split("-");
        return new Date(Number(year), Number(number) - 1, 1).toLocaleDateString(
            "en-ZA",
            { month: "long", year: "numeric" }
        );
    }

    return (
        <div className="MonthlySummary">
            <h2>Monthly Summary</h2>
            <ul className="MonthlySummary-list">
                {months.map((month) => (
                    <li key={month} className="MonthlySummary-row">
                        <span className="MonthlySummary-month">
                            {formatMonth(month)}
                        </span>
                        <div className="MonthlySummary-track">
                            <div
                                className="MonthlySummary-bar"
                                style={{ width: `${(totals[month] / max) * 100}%` }}
                            />
                        </div>
                        <span className="MonthlySummary-total">
                            R{totals[month].toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MonthlySummary;