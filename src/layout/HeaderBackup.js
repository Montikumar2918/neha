import React from "react";
import { FormControl, InputGroup, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { CartFill, PersonFill } from "../components/Icons";
function HeaderBackup() {
  return (
    <>
      <div className="site-header sticky-top">
        <Navbar
          collapseOnSelect
          expand={false}
          variant="light"
          className="shadow-sm py-0"
        >
          <div className="container-fluid d-block w-100 position-relative">
            <div className="row align-items-center">
              <div className="col">
                <a className="navbar-brand py-1 px-sm-4" href="/">
                  <img
                    className="img-fluid logo"
                    src="assets/images/logo-black.png"
                    alt="logo"
                  />
                </a>
              </div> 
              <div className="col-auto pe-0">
                <ul className="nav nav-btns justify-content-end">
                  {/* <li className="nav-item">
                    <a href="signin.html" className="nav-link px-3">
                      <span className="icons">
                        <PersonFill />
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="cart.html"
                      className="nav-link px-3 border-max-md-right"
                    >
                      <span className="icons">
                        <CartFill />
                      </span>
                    </a>
                  </li> */}
                  <li className="nav-item d-sm-flex align-items-center d-none">
                  <i className="bi bi-search"></i>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <nav
                  className="navbar py-lg-0"
                  aria-label="Fifth navbar example"
                >
                  <div className="container-fluid px-lg-3 px-0">
                    <Navbar.Collapse>
                      <div className="col-lg-auto menus-holder">
                        <ul className="navbar-nav w-100 justify-content-lg-between">
                          <li className="nav-item dropdown">
                            <Nav.Link className="nav-link" href="/">
                              Home
                            </Nav.Link>
                          </li>
                          <li className="nav-item">
                            <Nav.Link className="nav-link" href="/invoice">
                            HAIR ESSENTIALS
                            </Nav.Link>
                          </li>
                          <li className="nav-item">
                            <Nav.Link className="nav-link" href="/invoice-page">
                            HAND ESSENTIALS
                            </Nav.Link>
                          </li>
                          <li className="nav-item">
                            <Nav.Link className="nav-link" href="/locate-us">
                            KNOW US
                            </Nav.Link>
                          </li>
                          <li className="nav-item">
                            <Nav.Link className="nav-link" href="/contact">
                            CONTACT US
                            </Nav.Link>
                          </li>
                          <li className="nav-item">
                            <Nav.Link className="nav-link" href="/career">
                            CAREER
                            </Nav.Link>
                          </li>
                        </ul>
                      </div>
                    </Navbar.Collapse>
                    <Navbar.Toggle>
                      <span className />
                      <span className />
                      <span className />
                      <span className />
                      <span className />
                    </Navbar.Toggle>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default HeaderBackup;
