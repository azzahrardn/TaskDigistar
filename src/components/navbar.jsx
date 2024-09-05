import React from "react";
import '../index.css'; // Kita akan buat styling untuk navbar di file ini

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/dashboard">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;