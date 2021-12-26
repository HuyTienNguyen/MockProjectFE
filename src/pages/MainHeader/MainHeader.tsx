import React from "react";
import { Link } from "react-router-dom";
import "./MainHeader.css";

export const MainHeader: React.FC<any> = () => {
  return (
    <div className="header d__flex">
      <Link to="/" className="nav-link text-light">
        <h3 className="title-left">Crud App</h3>
      </Link>
    </div>
  );
};
