// Weather.jsx  -  GET with parameters: weather for any city (Open-Meteo).
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../api.js";
import DataTable from "../components/DataTable.jsx";

function Weather() {
  const navigate = useNavigate();
  const [city, setCity] = useState("Singapore");
  const [rows, setRows] = useState([]);

  // BLANK 20: an error message is text.
  // Start with an empty string.
  const [error, setError] = useState("");

  async function handleSearch(event) {
    event.preventDefault();
    try {
      // BLANK 21: call the weather function from api.js.
      // Give it the city.
      const result = await getWeather(city);
      setRows([...rows, result]);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="page">
      <h1>Weather (GET)</h1>
      <form onSubmit={handleSearch}>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      <DataTable
        columns={[
          { label: "Place", key: "place" },
          { label: "Country", key: "country" },
          { label: "Temperature", key: "temp" },
          { label: "Humidity", key: "humidity" },
          { label: "Wind", key: "wind" },
        ]}
        rows={rows}
      />
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Weather;
