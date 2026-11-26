export default function FilterBar({filter,setFilter}) {
    return(
        <div className="FilterBar">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option>All</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Education</option>
                <option>Bills</option>
                <option>Other</option>
            </select>
        </div>
    );
}