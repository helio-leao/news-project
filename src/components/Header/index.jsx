import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h1>Top Headlines</h1>
      </Link>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link className="header__link" to="/">
              Homepage
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
