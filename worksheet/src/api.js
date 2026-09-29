// api.js  -  every API call lives in this file.
// Fill in each ____ (blank). The BLANK comments tell you what to write.

// BLANK 1: read the NASA key from your .env file.
// Vite exposes env variables as import.meta.env.NAME
// Open worksheet/.env to find the NAME.
const NASA_KEY = import.meta.env.____;

const PRODUCTS_URL = "https://dummyjson.com/products";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
const NASA_URL = "https://api.nasa.gov/neo/rest/v1/feed";

// ---------- API 1: DummyJSON, GET (no key) ----------
export async function getProducts() {
  const response = await fetch(`${PRODUCTS_URL}?limit=8`);

  // BLANK 2: turn the raw response into a JavaScript object.
  // Which response method reads JSON?
  const data = await response.____();
  return data.products;
}

// ---------- API 1: DummyJSON, POST (no key) ----------
export async function addProduct(title, price) {
  const response = await fetch(`${PRODUCTS_URL}/add`, {
    // BLANK 3: which HTTP method sends new data to a server?
    method: "____",

    // BLANK 4: we send JSON, so tell the server: "application/____"
    headers: { "Content-Type": "application/____" },

    // BLANK 5: fetch can only send text.
    // Which JSON method turns an object into text?
    body: JSON.____({ title, price: Number(price) }),
  });
  return response.json();
}

// ---------- API 2: Open-Meteo, GET with parameters (no key) ----------
export async function getWeather(city) {
  // Step 1: turn a city name into coordinates (geocoding).
  // BLANK 6: put the city into the URL after name=
  // Use the function parameter (it is called city).
  const geoResponse = await fetch(`${GEO_URL}?name=${____}&count=1`);
  const geo = await geoResponse.json();
  if (!geo.results) throw new Error("City not found");
  const place = geo.results[0];

  // Step 2: ask for the weather at those coordinates.
  // BLANK 7: place has latitude and longitude. Fill in the first one.
  const latitude = place.____;
  const longitude = place.longitude;
  const fields = "temperature_2m,relative_humidity_2m,wind_speed_10m";
  const coords = `latitude=${latitude}&longitude=${longitude}`;
  const url = `${FORECAST_URL}?${coords}&current=${fields}`;

  const response = await fetch(url);
  const data = await response.json();
  return {
    place: place.name,
    country: place.country,
    temp: data.current.temperature_2m + " °C",
    humidity: data.current.relative_humidity_2m + " %",
    wind: data.current.wind_speed_10m + " km/h",
  };
}

// ---------- API 3: NASA asteroids, GET WITH an API key ----------
export async function getAsteroids(date) {
  // BLANK 8: put the key after api_key=
  // Use the constant from BLANK 1.
  const range = `start_date=${date}&end_date=${date}`;
  const url = `${NASA_URL}?${range}&api_key=${____}`;

  const response = await fetch(url);
  if (!response.ok) {
    // 403 = key missing or wrong, 429 = too many requests
    throw new Error(`NASA request failed: ${response.status}`);
  }
  const data = await response.json();
  const list = data.near_earth_objects[date] || [];

  return list.map((a) => {
    const meters = a.estimated_diameter.meters.estimated_diameter_max;
    const km = a.close_approach_data[0].miss_distance.kilometers;
    return {
      name: a.name,
      diameter: Math.round(meters) + " m",
      hazardous: a.is_potentially_hazardous_asteroid ? "Yes" : "No",
      distance: Math.round(Number(km)).toLocaleString() + " km",
    };
  });
}
