import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">JobPortal</h1>
      <nav>
        <Link className="mr-4 hover:underline" to="/">Home</Link>
        <Link className="mr-4 hover:underline" to="/post-job">Post Job</Link>
        <Link className="hover:underline" to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
