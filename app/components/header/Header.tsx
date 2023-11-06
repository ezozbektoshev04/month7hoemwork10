import Link from "next/link";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div>
          <a href="#">
            <img src="/image1.svg" alt="" />
          </a>
        </div>
        <div className="nav-links">
          <Link href="" className="nav-link">
            Home
          </Link>
          <Link href="" className="nav-link">
            About
          </Link>
          <Link href="" className="nav-link">
            Pages
          </Link>
          <Link href="/shop" className="nav-link">
            Shop
          </Link>
          <Link href="" className="nav-link">
            Projects
          </Link>
          <Link href="" className="nav-link">
            News
          </Link>
        </div>
        <div className="nav-items">
          <div className="field">
            <input type="text" className="input1" />
            <img src="/image2.svg" alt="" className="search-icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
