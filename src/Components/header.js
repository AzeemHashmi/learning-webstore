import React from "react";

export default function Header() {
  return (
    <>
      <main>
        {/* <div className="navbar" id="header">
          <marquee>
            Free shipping on orders above Rs.2000 within Pakistan and shipping
            rate of 99 PKR on every local orders.
          </marquee>
        </div>  */}
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <footer className="text-center text-lg-start bg-light text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div id="social_media_icons">
              <a href="/" className="me-4 text-reset">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </section>
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img
                      className="footer-icon"
                      src="/images/icon.png"
                      alt="icon"
                    />
                    SPARROWBIA
                  </h6>
                  <p>
                    Brand that inspired by the tastes of the modern street
                    style. We aim to empower people to be confident and reflect
                    it through their style.
                  </p>
                </div>

                <div
                  className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                  id="footer-links"
                >
                  <h6 className="text-uppercase fw-bold mb-4">Information</h6>
                  <p>
                    <a href="/" className="text-reset">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Blogs
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Style Guide
                    </a>
                  </p>
                </div>

                <div
                  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"
                  id="footer-links"
                >
                  <h6 className="text-uppercase fw-bold mb-4">Policies</h6>
                  <p>
                    <a href="/" className="text-reset">
                      Return & Exchange Policies
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      FAQS
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Our Partners
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fa fa-home" aria-hidden="true"></i> &nbsp;
                    &nbsp; New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    &nbsp; &nbsp; khadijaasif288@gmail.com
                  </p>
                  <p>
                    <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
                    &nbsp;&nbsp; + 92 336 4370 779
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-4 bottom-footer">
            © SPARROWBIA BY HKB RETAIL (SMC-Pvt) Limited 2022 (Previously known
            as Ahead Brands).
          </div>
        </footer>
      </main>
    </>
  );
}
