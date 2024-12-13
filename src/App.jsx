import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import About from "./pages/About";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </>
  );
}

// import './App.css'

// function App() {

//   return (
//     <>
//       <h1>Vite + React</h1>
//     </>
//   )
// }

// export default App
