# 🌤️ Weather & News App

A modern, responsive, and lightweight React application designed to deliver real-time weather details and curated news updates. Built with modern UI standards, custom hooks, and standard API management.

![React](https://img.shields.io/badge/React-18.x-blue?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=flat&logo=css3)

---

## 🚀 Features

- **Live Weather Search:** Search weather conditions across multiple locations.
- **Glassmorphism UI:** Clean, modern sky-blue/cyan atmospheric design aesthetic.
- **Debounced Inputs:** Optimized performance using a custom `useDebounce` hook to restrict rapid re-fetches.
- **News Integration:** Responsive 3-column news grid with clean categories and metadata.
- **Client-side Pagination:** Smooth pagination control to browse news articles efficiently.
- **Custom Data Fetcher:** Decoupled `useFetch` custom hook for modular dynamic state handling.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Modern Pure CSS (Custom Glassmorphism, CSS Grid & Flexbox)
- **State Management:** Custom React Hooks (`useFetch`, `useDebounce`)
- **Backend / API Mocking:** MockAPI.io REST API

---

## 📂 Project Structure

```text
Weather App/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── NewsList.jsx
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useFetch.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
