// Home.jsx  -  three buttons that move to other pages.

// BLANK 10: import the hook that lets code change the page.
// It comes from react-router-dom. Its name is use + Navigate.
import { useNavigate } from "react-router-dom";

function Home() {
  // BLANK 11: call the hook. It gives back a function
  // that takes you to another page.
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>React and API Data</h1>
      <p>Pick an API:</p>
      <button onClick={() => navigate("/products")}>
        DummyJSON products
      </button>

      {/* BLANK 12: send the student to the weather page: "/weather" */}
      <button onClick={() => navigate("/weather")}>
        Open-Meteo weather
      </button>

      <button onClick={() => navigate("/asteroids")}>
        NASA asteroids
      </button>
    </div>
  );
}

export default Home;
