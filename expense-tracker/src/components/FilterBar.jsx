function FilterBar({ filter, setFilter }) {
    return (
        <select
            className="FilterBar"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        >
            <option>All</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Education</option>
            <option>Bills</option>
            <option>Other</option>
        </select>
    );
}

export default FilterBar;