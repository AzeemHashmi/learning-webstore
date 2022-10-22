import React from "react";

export default function Header() {
  return (
    <>
      <main>
        <div className="navbar" id="header">
          <marquee>
            Free shipping on orders above Rs.2000 within Pakistan and shipping
            rate of 99 PKR on every local orders.
          </marquee>
        </div> 
        <div className="container-fluid" id="main-name">
          <img src="/images/icon.png" alt="" />
          <h1>SPARROWBIA</h1>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" id="menu-list">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Men
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarDropdown1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Women
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown1"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kids
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarDropdown3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Other Accessories
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="slider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/pret.png"
                className="d-block w-100"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/naqsh.png"
                className="d-block w-100"
                alt="Exotic Fruits"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/dex2.png"
                className="d-block w-100"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#slider"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#slider"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       
       
      </main>
    </>
  );
}
