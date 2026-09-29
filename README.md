# Introduction to Programming: React and APIs

Class date: 29 September

## Class slides

Slides: **PASTE GOOGLE SLIDES LINK HERE**

## What you will build

A plain React app with several pages. Every page shows API data in centered tables with alternating row colours.

| Page | Skill | API | Key? |
|---|---|---|---|
| Products | GET request | [DummyJSON](https://dummyjson.com) | No |
| Add a product | POST request, `useNavigate` with state | DummyJSON | No |
| Weather | GET with parameters | [Open-Meteo](https://open-meteo.com) | No |
| Asteroids | GET with an API key from `.env` | [NASA NeoWs](https://api.nasa.gov) | Yes (`DEMO_KEY` or a free key) |

You will also practise `useState`, `useEffect`, `useNavigate` and `useLocation`.

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

Only the NASA page needs a key. No password or account is needed.

- **Option A:** use `DEMO_KEY`. It works immediately but is limited to about 10 requests an hour for everyone on the same Wi-Fi.
- **Option B (recommended for a class):** open [api.nasa.gov](https://api.nasa.gov), fill in the Generate API Key form (name and email). The key appears on the page and is emailed to you.

Open `worksheet/.env` and paste the key after the `=`:

```
VITE_NASA_API_KEY=DEMO_KEY
```

Restart `npm run dev` after editing `.env`. Never share your own key or commit `.env` (it is in `.gitignore`).

## Fill in the blanks

Search the `worksheet/src` folder for `____`. There are 22 numbered blanks, each with a comment explaining what to write:

| Blanks | File |
|---|---|
| 1 to 8 | `worksheet/src/api.js` |
| 9 | `worksheet/src/App.jsx` |
| 10 to 12 | `worksheet/src/pages/Home.jsx` |
| 13, 14 | `worksheet/src/pages/Products.jsx` |
| 15 | `worksheet/src/components/DataTable.jsx` |
| 16 to 18 | `worksheet/src/pages/NewProduct.jsx` |
| 19 | `worksheet/src/pages/Added.jsx` |
| 20, 21 | `worksheet/src/pages/Weather.jsx` |
| 22 | `worksheet/src/pages/Asteroids.jsx` |

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
