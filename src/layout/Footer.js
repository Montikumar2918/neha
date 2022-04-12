import React from "react";
import { NavLink } from "react-router-dom";
import {
  Facebook,
  InstagramColored,
  LinkedinL,
  PhoneIcon,
  Twitter,
  EmailIcon,
} from "../components/Icons";
import Subscribe from "../components/Subscribe";

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <Subscribe />
      <footer className="section pb-0">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-auto col-12 order-md-4 order py-2">
              <div className="">
                <div className=" pb-3">
                  <a href="/" className="logo">
                    <img
                      src="assets/images/logo.png "
                      alt=""
                      className="img-fluid w-100px"
                    />
                  </a>
                </div>
                <div className="col-12">
                  <div className="row d-inline-flex">
                    <div className="col-auto pe-0">
                      <PhoneIcon />
                    </div>
                    <div className="col">
                      <span className="text-dark mb-1 fs-14px">
                        Phone Number
                      </span>
                      <br></br>
                      <a
                        href="tel:011-27691049"
                        className="text-dark fw-bold fs-16px"
                      >
                        011-27691049
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row d-inline-flex">
                    <div className="col-auto pe-0">
                      <EmailIcon />
                    </div>
                    <div className="col">
                      <div className="text-dark mb-1 fs-14px">
                        Email Address
                      </div>
                      <a
                        href="mailto:info@nehaherbals.com"
                        className="text-dark fw-bold fs-16px"
                      >
                        info@nehaherbals.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md col-sm col-6 py-2">
              <h6 className="nav-heading font-paragraph fw-bold ps-1">
                Explore
              </h6>
              <div className="row">
                <nav className="nav flex-column"> 
                  <a className="nav-link" href="/privacy-policy">
                    All Products
                  </a>
                  <a className="nav-link" href="/hair-essentials">
                    Hair Essentials
                  </a>
                  <a className="nav-link" href="/hand-essentials">
                    Hand Essentials
                  </a>
                  <a className="nav-link" href="/personal-care">
                    Personal Care
                  </a>
                </nav>
              </div>
            </div>
            <div className="col-md col-sm col-6 py-2">
              <h6 className="nav-heading font-paragraph fw-bold ps-1">
                Customer Care
              </h6>
              <div className="row">
                <nav className="nav flex-column"> 
                  <a className="nav-link" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                  <a className="nav-link" href="/pro-details">
                    Terms &amp; Conditions
                  </a>
                  <a className="nav-link" href="/faq">
                    FAQs
                  </a>
                </nav>
              </div>
            </div>
            <div className="col-md col-sm col-12 py-2">
              <h6 className="nav-heading font-paragraph fw-bold ps-1">About</h6>
              <div className="row">
                <nav className="nav flex-column">
                  <a className="nav-link active" href="/about">
                    Our Story
                  </a>
                  <a className="nav-link" href="/neha-herbals-worldwide">
                    Neha Herbals Worldwide
                  </a>
                  <a className="nav-link" href="/news-and-media">
                    News &amp; Media
                  </a>
                  <a className="nav-link" to="/career">
                    Work with Us
                  </a>
                  <a className="nav-link" href="/knowledge-lab" >
                    Knowledge Lab
                  </a>
                  <a className="nav-link" href="/Sitemap">
                    Sitemap
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 py-md-4">
              <div className="row social-icons justify-content-center">
                <div className="col-sm-auto">
                  <div className="title pt-2">
                    <h2 className="h5 text-dark text-sm-start text-center">Show us some love on:</h2>
                  </div>
                </div>
                <div className="col-auto py-1">
                  <a
                    href="https://www.facebook.com/sushibyyugo/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn d-flex justify-content-center align-items-center border-0 px-0"
                  >
                    <Facebook />
                  </a>
                </div>

                <div className="col-auto py-1">
                  <a
                    href="http://instagram.com/sushibyyugo"
                    target="_blank"
                    rel="noreferrer"
                    className="btn d-flex justify-content-center align-items-center border-0 px-0"
                  >
                    <Twitter />
                  </a>
                </div>
                <div className="col-auto py-1">
                  <a
                    href="http://instagram.com/sushibyyugo"
                    target="_blank"
                    rel="noreferrer"
                    className="btn d-flex justify-content-center align-items-center border-0 px-0"
                  >
                    <LinkedinL />
                  </a>
                </div>
                <div className="col-auto py-1">
                  <a
                    href="http://instagram.com/sushibyyugo"
                    target="_blank"
                    rel="noreferrer"
                    className="btn d-flex justify-content-center align-items-center border-0 px-0"
                  >
                    <InstagramColored />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className=" border-top border-white"></div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col py-3 text-center">
                  <a href="/" className="">
                    &copy; 2022 Neha Herbals Pvt. Ltd. All Rights Reserved.
                  </a>
                </div>
                {/* <div className="col-auto">
                  <button className="btn text-primary" onClick={scrollToTop}>
                    Back to Top
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
