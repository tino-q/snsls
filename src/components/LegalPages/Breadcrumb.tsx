import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

interface BreadcrumbProps {
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPage }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">
            Inicio
          </Link>
        </li>
        <li className="breadcrumb-separator">/</li>
        <li className="breadcrumb-item current">
          <span className="breadcrumb-text">{currentPage}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
