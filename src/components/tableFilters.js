
const TableFilters = ({ setQuery, setCount, count, query, data, countOptions }) => {
  return (
    <div className="row">
      <div className="col">
        <input type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
          placeholder="Filter by Project Name, Entity, Country..." />
      </div>
      <div className="col">
        <div className="text-end">
          <ul className="list-inline">
            <li className="list-inline-item">
              <p className="m-0">Total: {data.length} projects</p>
            </li>
            <li className="list-inline-item">
              <select className="form-select" value={count} onChange={(e) => setCount(e.target.value)}>
                {countOptions.map((option) => (
                  <option key={option} value={option}>Display {option === -1 ? "all" : option} items</option>
                ))}
              </select>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default TableFilters;