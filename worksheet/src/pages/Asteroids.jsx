// Asteroids.jsx  -  GET with an API key: NASA asteroids near Earth.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAsteroids } from "../api.js";
import DataTable from "../components/DataTable.jsx";

function Asteroids() {
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  async function handleLoad() {
    try {
      // BLANK 22: call the NASA function from api.js.
      // Give it the chosen date.
      const list = await ____(date);
      setRows(list);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="page">
      <h1>Asteroids near Earth (GET with API key)</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleLoad}>Load asteroids</button>
      {error && <p className="error">{error}</p>}
      <DataTable
        columns={[
          { label: "Name", key: "name" },
          { label: "Width (max)", key: "diameter" },
          { label: "Hazardous", key: "hazardous" },
          { label: "Miss distance", key: "distance" },
        ]}
        rows={rows}
      />
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Asteroids;
