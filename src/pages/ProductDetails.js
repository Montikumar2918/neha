import React from "react";
import { Card } from "react-bootstrap";

const ProductDetails = () => {
  return (
    <>
      <section className="pb-3">
        <div className="container details">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center py-lg-1 py-3">
                Get the latest insights
              </h2>
              <hr />
            </div>
          </div>
          <div className="row details-page">
            <div className="col-lg-7">
              <Card className="border-0">
                <p className="mb-2 fw-bold">Most Read</p>
                <Card.Img variant="top" src="assets/images/pro-details.png" />
                <Card.Body className="px-0">
                  <Card.Title>
                    3 Beautiful Lace Inspired Designs to warm every girl’s heart
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="" className="text-primary fw-bold">
                        READ MORE
                      </a>
                    </div>
                    <div>
                      <a href="" className="text-gray-500 ">
                        27 August 2021
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-5 popular-this-week">
              <div className="row">
                <div className="col-12">
                  <p className="mb-2 fw-bold">Popular this week</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-auto img-responsive">
                  <div className="img-holder" width="181px" height="121px">
                    <img
                      className="object-fit-cover"
                      src="assets/images/blog-img-1.png"
                      alt="img-1"
                    />
                  </div>
                </div>
                <div className="col text-blog">
                  <p className="fw-bold mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <p className="mb-3">
                    <a href="#" className="text-gray-500">
                      27 August 2021
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary fw-bold">
                      READ ARTICLE
                    </a>
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-auto img-responsive">
                  <div className="img-holder" width="181px" height="121px">
                    <img
                      className="object-fit-cover"
                      src="assets/images/blog-img-2.png"
                      alt="img-1"
                    />
                  </div>
                </div>
                <div className="col text-blog">
                  <p className="fw-bold mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <p className="mb-3">
                    <a href="#" className="text-gray-500">
                      27 August 2021
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary fw-bold">
                      READ ARTICLE
                    </a>
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-auto img-responsive">
                  <div className="img-holder" width="181px" height="121px">
                    <img
                      className="object-fit-cover"
                      src="assets/images/blog-img-3.png"
                      alt="img-1"
                    />
                  </div>
                </div>
                <div className="col text-blog">
                  <p className="fw-bold mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <p className="mb-3">
                    <a href="#" className="text-gray-500">
                      27 August 2021
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary fw-bold">
                      READ ARTICLE
                    </a>
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-auto img-responsive">
                  <div className="img-holder" width="181px" height="121px">
                    <img
                      className="object-fit-cover"
                      src="assets/images/blog-img-4.png"
                      alt="img-1"
                    />
                  </div>
                </div>
                <div className="col text-blog">
                  <p className="fw-bold mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <p className="mb-3">
                    <a href="#" className="text-gray-500">
                      27 August 2021
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary fw-bold">
                      READ ARTICLE
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container pb-5 mb-md-5">
            <div className="row">
                <h2>Recently Posted</h2>
            </div>
          <div className="row row-cols-lg-3 row-cols-md-2">
            <div className="col">
              <Card className="shadow-sm">
                <Card.Img variant="top" className="p-2" src="assets/images/recently-img-1.png" />
                <Card.Body className="pt-1">
                  <Card.Title>Natural Henna Tatoos</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="" className="text-primary fs-16px">
                        READ MORE
                      </a>
                    </div>
                    <div>
                      <a href="" className="text-gray-500 ">
                        27 August 2021
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="shadow-sm">
                <Card.Img variant="top" className="p-2" src="assets/images/recently-img-2.png" />
                <Card.Body className="pt-1">
                  <Card.Title>Natural Henna Tatoos</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="" className="text-primary fs-16px">
                        READ MORE
                      </a>
                    </div>
                    <div>
                      <a href="" className="text-gray-500 ">
                        27 August 2021
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="shadow-sm">
                <Card.Img variant="top" className="p-2" src="assets/images/recently-img-3.png" />
                <Card.Body className="pt-1">
                  <Card.Title>Natural Henna Tatoos</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="" className="text-primary fs-16px">
                        READ MORE
                      </a>
                    </div>
                    <div>
                      <a href="" className="text-gray-500 ">
                        27 August 2021
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
