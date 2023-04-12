import React from "react";
import { useLocation } from "react-router-dom";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";

const Choosing: React.FC = () => {
  const location = useLocation();

  return (
    <main className="choosing">
      <div className="choosing-search-bar-container">
        <SearchBar />
      </div>
    </main>
  );
};

export default Choosing;
