# Celebrare Photo Gallery – Frontend Assignment

## Overview

This project is a **React Photo Gallery Web Application** built as part of the **Celebrare Frontend Internship Pre-Screening Assignment**.

The application fetches photos from the **Picsum Photos API**, displays them in a responsive grid layout, allows users to search photos by author name, and lets users mark photos as favourites. Favourite selections persist even after refreshing the page using **localStorage**.

The project demonstrates key React concepts such as **custom hooks, reducers, memoization hooks, and responsive UI design using Tailwind CSS**.

---

## Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **React Hooks**

  * useState
  * useEffect
  * useReducer
  * useMemo
  * useCallback
* **LocalStorage API**
* **Picsum Photos API**

---

## Features

### 1. Fetch Photos from API

The application fetches **30 photos** from the Picsum API when the page loads.

API used:

https://picsum.photos/v2/list?limit=30

While the request is being processed, a **loading spinner** is displayed.
If the request fails, an **error message** is shown.

---

### 2. Responsive Photo Grid

Photos are displayed in a responsive grid layout:

| Device  | Columns   |
| ------- | --------- |
| Mobile  | 1 column  |
| Tablet  | 2 columns |
| Desktop | 4 columns |

Each card contains:

* Photo
* Author name
* Favourite toggle button

---

### 3. Search by Author

A search bar allows users to filter photos by **author name**.

* Filtering happens **in real time**
* No additional API requests are made
* The filter operates on the **already fetched dataset**

---

### 4. Favourites System

Users can mark photos as favourites by clicking the **heart icon**.

* Uses **useReducer** for state management
* Supports **toggle behaviour**
* Favourite photo IDs are stored in **localStorage**

This ensures favourites **persist after page refresh**.

---

## React Concepts Used

### Custom Hook – `useFetchPhotos`

The data fetching logic is extracted into a reusable custom hook.

Responsibilities:

* Fetch photos from API
* Manage loading state
* Handle errors
* Return fetched data to components

Returned values:

* `photos`
* `loading`
* `error`

---

### Reducer – `favouritesReducer`

`useReducer` is used to manage the favourites state.

Reducer handles:

* **TOGGLE_FAV**

Logic:

* If photo ID exists → remove from favourites
* If photo ID does not exist → add to favourites

State updates are **immutable**, meaning new arrays are created instead of mutating the existing state.

---

### useMemo

`useMemo` is used to memoize the filtered photo list.

Without `useMemo`, the filtering logic would execute on every render.
With `useMemo`, the filtering only recalculates when:

* the photos array changes
* the search query changes

---

### useCallback

`useCallback` is used for the search handler function.

This prevents the function from being recreated on every render, helping maintain stable function references and improving performance.

---

## Project Structure

```
celebrare-photo-gallery
│
├── node_modules
├── src
│   │
│   ├── components
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   │
│   ├── hooks
│   │   └── useFetchPhotos.js
│   │
│   ├── reducers
│   │   └── favouritesReducer.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Component Overview

**Gallery**

* Main application logic
* Handles search, filtering, reducer state
* Renders photo grid

**PhotoCard**

* Displays individual photo
* Shows author name
* Handles favourite toggle

---

## Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/celebrare-photo-gallery.git
```

Navigate to the project folder:

```
cd celebrare-photo-gallery
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open the app in the browser:

```
http://localhost:5173
```

---

## Assignment Requirements Covered

✔ React + Vite setup
✔ Tailwind CSS styling
✔ Fetch data from API
✔ Loading and error states
✔ Responsive grid layout
✔ Search filter functionality
✔ Favourites using useReducer
✔ LocalStorage persistence
✔ Custom hook for data fetching
✔ useCallback and useMemo usage

---

## Screen Recording

A short screen recording explaining the project implementation has been included as part of the assignment submission.

The video demonstrates:

* Application functionality
* Custom hook implementation
* Reducer logic
* useMemo and useCallback usage
* Discussion of implementation challenges

---

## Author

Vinayak
Frontend Developer (Student)
