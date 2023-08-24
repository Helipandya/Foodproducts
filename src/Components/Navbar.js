import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="main_menu home_menu container-fluid bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 ">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand logo" href="/">
                  {" "}
                  <img
                    src="img/logo.png"
                    alt="logo"
                    style={{ height: "90px", width: "80px  " }}
                  />{" "}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-a" href="home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-a" href="menu">
                        Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-a" href="chefs">
                        Chefs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-a" href="singleblog">
                        Single blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-a" href="contact">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-a" href="about">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu_btn">
                  <a href="#" className="btn_1 d-none d-sm-block">
                    book a tabel
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
