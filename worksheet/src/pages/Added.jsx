// Added.jsx  -  shows what the server sent back after the POST.
import { useLocation, useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable.jsx";

function Added() {
  const navigate = useNavigate();

  // BLANK 19: read the data that NewProduct passed with navigate().
  // The hook is named use + Location.
  const { state } = ____();

  if (!state) {
    return (
      <div className="page">
        <p>Nothing to show yet.</p>
        <button onClick={() => navigate("/products/new")}>Add one</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>The server replied</h1>
      <DataTable
        columns={[
          { label: "New ID", key: "id" },
          { label: "Title", key: "title" },
          { label: "Price ($)", key: "price" },
        ]}
        rows={[state.product]}
      />
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Added;
