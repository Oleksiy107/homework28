import React from "react";
import "./sass/main.scss";
import Stars from "../static/Stars.jpeg";
function Main() {
  return (
    <main className="main-block">
      <p className="main-block__description">
        Це сайт для підготовки до співбесіди на позицію фронтенд
      </p>
      <img src={Stars} alt="Star" className="main-block__logo" />
    </main>
  );
}
export default Main;
