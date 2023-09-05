import React from "react";
import "./sass/header.scss";
function Header() {
  return (
    <header>
      <ul className="Menultem">
        <li className="Menultem__item">Головна</li>
        <li className="Menultem__item">Питання</li>
        <li className="Menultem__item">Матеріали</li>
        <li className="Menultem__item">Контакти</li>
      </ul>
    </header>
  );
}
export default Header;
