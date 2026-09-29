// NewProduct.jsx  -  POST request: send a new product to DummyJSON.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api.js";

function NewProduct() {
  const navigate = useNavigate();

  // BLANK 16: call the hook that stores a value and gives back
  // a setter function. Its name is use + State.
  const [title, setTitle] = ____("Zoo mug");
  const [price, setPrice] = useState(9);

  async function handleSubmit(event) {
    event.preventDefault(); // stop the browser reloading the page
    const result = await addProduct(title, price);

    // BLANK 17: navigate() takes a 2nd argument that can carry data
    // to the next page. Write the option name: state
    navigate("/products/added", { ____: { product: result } });
  }

  return (
    <div className="page">
      <h1>Add a product (POST)</h1>
      <form onSubmit={handleSubmit}>
        {/* BLANK 18: onChange must call the setter for title */}
        <input value={title} onChange={(e) => ____(e.target.value)} />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate("/products")}>Back</button>
    </div>
  );
}

export default NewProduct;
