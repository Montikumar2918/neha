import React from "react";
import {
  Button,
  Dropdown,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const Career = () => {
  return (
    <>
      <section className="banner py-0 position-relative">
        <div className="container-fluid px-0 ">
          <div className="row">
            <div className="img-holder height-img">
              <img
                className="object-fit-cover"
                src="assets/images/job-openings-banner.png"
                alt=""
              />
            </div>
            <div className="content-box tex-centers">
              <div className="col-auto mx-auto">
                <h1 className="text-white display-3 career-heading">#LIFEATNEHAHERBALS</h1>
                <div className="row justify-content-center gy-3">
                  <div className="col-xl-3 col-lg-4 col-sm-8 col-12 d-grid">
                    <button className="btn btn-outline-light m-1 rounded-0">
                      Job Openings
                    </button>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-8 col-12 d-grid">
                    <button className="btn btn-outline-light m-1 rounded-0">
                      Become a Distributor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-bg-holder">
          <div className="overlay bg-dark"></div>
        </div>
      </section>
      <section className="opening-job">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Job Openings</h1>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-white border-end-0 border-end-0 rounded-0 border-top-0 border-start-0 ps-1"
                >
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <FormControl
                  className="border-start-0 border-end-0 rounded-0 border-top-0"
                  placeholder="Search Jobs "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <div className="row">
                <div className="col-auto">
                  <Dropdown>
                    <Dropdown.Toggle className="btn-link" id="dropdown-basic">
                      Department
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-auto">
                  <Dropdown>
                    <Dropdown.Toggle className="btn-link" id="dropdown-basic">
                      Location
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="opening-job pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 p-3 text-center border-bottom">
              <h5 className="mb-1">Sales Associate</h5>
              <p className="mb-0">Sales - Haridwar</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3 text-center border-bottom">
              <h5 className="mb-1">Sales Associate</h5>
              <p className="mb-0">Sales - Haridwar</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3 text-center border-bottom">
              <h5 className="mb-1">Sales Associate</h5>
              <p className="mb-0">Sales - Haridwar</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3 text-center border-bottom">
              <h5 className="mb-1">Sales Associate</h5>
              <p className="mb-0">Sales - Haridwar</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3 text-center border-bottom">
              <h5 className="mb-1">Sales Associate</h5>
              <p className="mb-0">Sales - Haridwar</p>
            </div>
          </div>
        </div>
      </section>
      <section className="opening-job">
        <div className="container">
          <div className="container">
            <div className="row ">
              <div className="col-12 text-center">
                <h1>Become a Distributor</h1>
                <p>
                  Making a world-class product is one thing. Distributing and
                  making them available to customers as and when they need them,
                  is quite another. At Neha Herbals, our strong relationship
                  with our national and international distributors has been one
                  of the cornerstones of our company. At present, our network
                  exceeds over 900 distributors who continue to collaborate with
                  us, thanks to our dynamic support and superior products. It is
                  our constant effort to widen our network and build
                  associations that are mutually beneficial. If you want to
                  partner with us, simply fill the below form and we'll get in
                  touch with you.
                </p>
              </div>
            </div>
            <div className="row pt-4 g-4">
              <div className="col-md-6 d-flex">
                <div className="img-holder w-100 h-100">
                  <img
                    className="object-fit-cover"
                    src="assets/images/distributor.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-md-6 ps-md-5 m">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email"   />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text"  />
                  </Form.Group>
                  <Form.Group className="">
                  <Form.Label>Suggestion/Comment</Form.Label>
                  <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "120px" }}
                    />
                  </Form.Group>
                   <div className="pt-5 text-end">
                   <Button variant="primary" className=" w-50 text-white" type="submit">
                   Submit
                  </Button>
                   </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
