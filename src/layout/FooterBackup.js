import React from "react";
import {
  Facebook,
  InstagramColored,
  LinkedinL,
  PhoneIcon,
  Twitter,
  Location,
  EmailIcon,
} from "../components/Icons";
import Subscribe from "../components/Subscribe";

const FooterBackup = () => {
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
          <div className="row">
            <div className="col-lg-5 py-2 ">
              <div className="row pe-5">
                <div className="col-12 py-3">
                  <a href="/" className="logo">
                    <img
                      src="assets/images/logo.png "
                      alt=""
                      className="img-fluid w-100px"
                    />
                  </a>
                </div>
                <div className="col-12 py-1 ">
                  <div className="row pe-md-5">
                    {/* <div className="col-auto pe-0">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div> */}
                    <div className="col text-dark">
                      Since its inception in 1992, Neha Herbals nurtures simple
                      values of being close to nature, purity and being based in
                      Science.
                    </div>
                  </div>
                </div>

                <div className="col-12 pb-md-4">
                  <div className="row social-icons">
                    <div className="col-12">
                      <div className="title pt-2">
                        <h2 className="h5 text-dark">Show us some love on:</h2>
                      </div>
                    </div>
                    <div className="col-auto py-1">
                      <a
                        href="https://www.facebook.com/sushibyyugo/"
                        target="_blank" rel="noreferrer"
                        className="btn d-flex justify-content-center align-items-center border-0 px-0"
                      >
                        <Facebook />
                      </a>
                    </div>

                    <div className="col-auto py-1">
                      <a
                        href="http://instagram.com/sushibyyugo"
                        target="_blank" rel="noreferrer"
                        className="btn d-flex justify-content-center align-items-center border-0 px-0"
                      >
                        <Twitter />
                      </a>
                    </div>
                    <div className="col-auto py-1">
                      <a
                        href="http://instagram.com/sushibyyugo"
                        target="_blank" rel="noreferrer"
                        className="btn d-flex justify-content-center align-items-center border-0 px-0"
                      >
                        <LinkedinL />
                      </a>
                    </div>
                    <div className="col-auto py-1">
                      <a
                        href="http://instagram.com/sushibyyugo"
                        target="_blank" rel="noreferrer"
                        className="btn d-flex justify-content-center align-items-center border-0 px-0"
                      >
                        <InstagramColored />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md py-2">
              <h5 className="nav-heading ps-1">QUICK LINKS</h5>
              <div className="row">
                <nav className="nav flex-column"> 
                  <a className="nav-link" href="/privacy-policy">
                  Privacy Policy
                  </a>
                  <a className="nav-link" href="/terms-and-conditions">
                  Terms &#38; Conditions
                  </a>
                  <a className="nav-link" href="/knowledge-lab">
                  Knowledge Lab
                  </a>
                  <a className="nav-link" href="/career">
                    Career
                  </a>
                  <a className="nav-link" href="/sales-associate">
                  Sales Associate
                  </a>
                </nav>
              </div>
            </div>
            <div className="col-xl-4 order-xl-3 col-md py-2 ms-auto">
              <h5 className="nav-heading ps-1">Contact Us</h5>
              <div className="row">
                <div className="col-12 py-1">
                  <div className="row">
                    <div className="col-auto pe-0">
                      <PhoneIcon />
                    </div>
                    <div className="col">
                      <p className="text-dark mb-1 fs-14px">Phone Number</p>
                      <a
                        href="011-27691049"
                        className="text-dark fw-bold fs-16px"
                      >
                        011-27691049
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 py-1">
                  <div className="row">
                    <div className="col-auto pe-0">
                      <EmailIcon />
                    </div>
                    <div className="col">
                      <p className="text-dark mb-1 fs-14px">Email Address</p>
                      <a
                        href="011-27691049"
                        className="text-dark fw-bold fs-16px"
                      >
                        info@nehaherbals.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 py-1">
                  <div className="row">
                    <div className="col-auto pe-0">
                      <Location />
                    </div>
                    <div className="col">
                      <p className="text-dark mb-1 fs-14px">Address</p>
                      <a
                        href="011-27691049"
                        className="text-dark fw-bold fs-16px"
                      >
                        76, S.S.I Co-Op Industrial Estate G.T. Karnal Road, New
                        Delhi-110 033 (INDIA){" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg py-2 d-none">
              <h5 className="nav-heading ps-1">LOCATIONS</h5>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <select className="form-select rounded-0 " name="" id="">
                      <option selected>Yugo Sushi Al Furjan</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <p>
                    Al Furjan - Sheikh Mohammed Bin Zayed Rd - Jebel Ali Village{" "}
                    <br />
                    Dubai
                    <br />
                    564031003,45832055
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className=" border-top"></div>
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

export default FooterBackup;
