# Introduction to Programming: React and APIs

Class date: 29 September

## Class slides

Slides: **PASTE GOOGLE SLIDES LINK HERE**

## What you will build

A plain React page that shows API data in centered tables with alternating row colours:

| Section | Skill | API |
|---|---|---|
| Users table | GET request | JSONPlaceholder (no key) |
| Weather table | GET request with an API key | OpenWeatherMap (free key) |
| Send a post | POST request | JSONPlaceholder |

## Quick start

You need [Node.js](https://nodejs.org) (LTS) and [Git](https://git-scm.com/downloads).
On Windows, Git for Windows also provides `bash`, which runs `prepare.sh`.

**Mac (Terminal)**

```bash
cd ~/Desktop
git clone https://github.com/Algebras/nsLesson.git
cd nsLesson
bash prepare.sh
cd worksheet
```

**Windows (PowerShell)**

```powershell
cd ~\Desktop
git clone https://github.com/Algebras/nsLesson.git
cd nsLesson
bash prepare.sh
cd worksheet
```

`prepare.sh` checks Node.js, installs React and Vite for the worksheet and the backup demo, and creates `worksheet/.env`.

## Add your API key

1. Create a free key at [openweathermap.org](https://openweathermap.org) (Sign in, then My API keys).
2. Open `worksheet/.env` and paste the key after the `=`:

   ```
   VITE_WEATHER_API_KEY=your_key_here
   ```

3. Never share the key or commit `.env` (it is in `.gitignore`).

## Fill in the blanks

Search the `worksheet/src` folder for `____`. There are 12 numbered blanks, each with a comment explaining what to write:

| Blanks | File |
|---|---|
| 1 to 7 | `worksheet/src/api.js` |
| 8 to 11 | `worksheet/src/App.jsx` |
| 12 | `worksheet/src/components/DataTable.jsx` |

## Run the app

```bash
cd worksheet
npm run dev
```

Open <http://localhost:5173>. Stop the server with `Ctrl+C`. Restart it after editing `.env`.

## If your app will not run

A finished copy lives in a hidden folder. It uses the key from `worksheet/.env`.

```bash
cd nsLesson/.backup-demo
npm run dev
```

Open <http://localhost:5174> to see what your page should look like. Use `ls -a` (Mac) or `dir -Force` (Windows) to see hidden folders.
