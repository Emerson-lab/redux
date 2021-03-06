import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

export default function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="logo tipo de um avião branco"
          title="reservas.com"
        />
      </Link>

      <Link className="reservas" to="/reservas">
        <div>
          <strong>minhas reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </header>
  );
}
