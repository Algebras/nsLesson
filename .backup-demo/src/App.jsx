// App.jsx  -  completed backup version of the worksheet

// BLANK 8: import the hook that stores data in a component.
// Its name is use + State.
import { useState, useEffect } from "react";

// BLANK 9: import the weather function from api.js.
// Open api.js and check the exact name.
import { getUsers, getWeather, createPost } from "./api.js";

import DataTable from "./components/DataTable.jsx";

const CITIES = ["London", "Singapore", "Tokyo"];

function App() {
  const [users, setUsers] = useState([]);
  const [weather, setWeather] = useState([]);
  const [newPost, setNewPost] = useState(null);
  const [title, setTitle] = useState("Hello class");
  const [body, setBody] = useState("My first POST request");

  useEffect(() => {
    // BLANK 10: when getUsers() finishes, pass its data
    // to the state setter for users.
    getUsers().then(setUsers);

    Promise.all(CITIES.map(getWeather))
      .then((results) =>
        setWeather(
          results.map((w) => ({
            city: w.name,
            temp: Math.round(w.main.temp) + " °C",
            humidity: w.main.humidity + " %",
            description: w.weather[0].description,
          }))
        )
      )
      .catch((error) => console.error(error));

    // BLANK 11: the 2nd argument controls WHEN useEffect runs.
    // An empty array means "only once, when the page loads".
  }, []);

  async function handleSubmit(event) {
    event.preventDefault(); // stop the browser reloading the page
    const result = await createPost(title, body);
    setNewPost(result);
  }

  return (
    <div className="page">
      <h1>React and API Data</h1>

      <h2>Users (GET)</h2>
      <DataTable
        columns={[
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Email", key: "email" },
        ]}
        rows={users}
      />

      <h2>Weather (GET with API key)</h2>
      <DataTable
        columns={[
          { label: "City", key: "city" },
          { label: "Temperature", key: "temp" },
          { label: "Humidity", key: "humidity" },
          { label: "Sky", key: "description" },
        ]}
        rows={weather}
      />

      <h2>Send a post (POST)</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Send</button>
      </form>

      {newPost && (
        <DataTable
          columns={[
            { label: "ID from server", key: "id" },
            { label: "Title", key: "title" },
            { label: "Body", key: "body" },
          ]}
          rows={[newPost]}
        />
      )}
    </div>
  );
}

export default App;
