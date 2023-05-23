import React from "react";
import { ItemList } from "./ItemList";

import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { ShoppingCartProvider } from "./ShoppingCartContext";

export const AppCart = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};
