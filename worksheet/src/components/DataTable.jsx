// DataTable.jsx  -  a reusable table.
//   columns = [{ label: "Name", key: "name" }, ...]  (header cells)
//   rows    = [{ name: "Ann", ... }, ...]            (one object per row)

function DataTable({ columns, rows }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* BLANK 15: make one <tr> for every row.
            Which array method turns each item into JSX?
            (you already used it above, 3 letters) */}
        {rows.____((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
