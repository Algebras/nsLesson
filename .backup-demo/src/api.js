// api.js  -  completed backup version of the worksheet

// BLANK 1: read your key from the .env file.
// Vite exposes env variables as import.meta.env.NAME
// Open worksheet/.env to find the NAME.
const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

// ---------- GET request (no key needed) ----------
export async function getUsers() {
  // BLANK 2: fetch() needs an address to call.
  // Which constant above holds the users address?
  const response = await fetch(USERS_URL);

  // BLANK 3: turn the raw response into a JavaScript object.
  // Which response method reads JSON?
  const data = await response.json();
  return data;
}

// ---------- GET request WITH an API key ----------
export async function getWeather(city) {
  // BLANK 4: put the key after appid=
  // Use the constant from BLANK 1.
  const url = `${WEATHER_URL}?q=${city}&units=metric&appid=${WEATHER_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    // 401 usually means the key is missing or not active yet
    throw new Error(`Weather request failed: ${response.status}`);
  }
  return response.json();
}

// ---------- POST request (send data) ----------
export async function createPost(title, body) {
  const response = await fetch(POSTS_URL, {
    // BLANK 5: which HTTP method sends new data to a server?
    method: "POST",

    // BLANK 6: we send JSON, so tell the server: "application/json"
    headers: { "Content-Type": "application/json" },

    // BLANK 7: fetch can only send text.
    // Which JSON method turns an object into text?
    body: JSON.stringify({ title, body, userId: 1 }),
  });
  return response.json();
}
