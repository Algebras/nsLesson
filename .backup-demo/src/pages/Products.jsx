// Products.jsx  -  GET request: a table of products from DummyJSON.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api.js";
import DataTable from "../components/DataTable.jsx";

function Products() {
  const navigate = useNavigate();

  // BLANK 13: useState needs a starting value.
  // The table rows are a list, so start with an empty list.
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((e) => setError(e.message));

    // BLANK 14: the 2nd argument controls WHEN useEffect runs.
    // An empty array means "only once, when the page loads".
  }, []);

  return (
    <div className="page">
      <h1>Products (GET)</h1>
      {error && <p className="error">{error}</p>}
      <DataTable
        columns={[
          { label: "ID", key: "id" },
          { label: "Title", key: "title" },
          { label: "Category", key: "category" },
          { label: "Price ($)", key: "price" },
        ]}
        rows={products}
      />
      <button onClick={() => navigate("/products/new")}>
        Add a product (POST)
      </button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Products;
