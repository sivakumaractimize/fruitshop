import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';





const Nav = () => {
  const [showIcons, setShowIcons] = useState(true);
  const [centerText, setCenterText] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
    setCenterText(!centerText); // Toggle the state to center the text
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{
        background: 'rgb(73,128,51)',
        background: 'radial-gradient(circle, rgba(73,128,51,1) 0%, rgba(222,231,195,1) 0%)'
      }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleIcons} // Added onClick event to toggle the icons
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            <img src="./assets/images/navlogo.png" alt="logo" className="img-fluid navlogo" ></img>
          </a>
          <div className={`collapse navbar-collapse ${centerText ? 'text-center' : ''}`} id="navbarText">
            <div className="ms-auto">
              <ul className={`navbar-nav mb-2 me-5 mb-lg-0 ${centerText ? 'justify-content-center' : 'justify-content-end'}`}> {/* Conditionally change justify-content */}
                <li className="nav-item me-5">
                  <a className="nav-link text-dark fw-bold " aria-current="page" href="/">
                   Home
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark fw-bold" href="/shop">
                    Shop
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark fw-bold" href="/aboutus">
                    About
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark fw-bold" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`navicons d-flex align-items-center ms-auto ${!showIcons ? 'd-none' : ''}`}>
            <img src="./assets/images/circle-user.svg" className="me-3"></img>
            <img src="./assets/images/search.svg" className="me-3"></img>
            <img src="./assets/images/shopping-cart.svg" className="me-3"></img>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav;
