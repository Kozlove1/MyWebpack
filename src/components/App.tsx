import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Goods } from "./Goods";
import { Main } from "./Main";
import { ShoppingCart } from "./ShoppingCart";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/goods">Goods</Link>
            </li>
            <li>
              <Link to="/shoppingCart">Shopping Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
