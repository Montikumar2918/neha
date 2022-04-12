
import React from "react";
import {
  Button,
  Form
} from "react-bootstrap";
import {  Suitcase , FlashIcon, Location } from "../components/Icons";

const JobDetails = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3>Sales Associate</h3>
             

              <ul  numbered className="col-5 list-unstuled ps-0">
                <li
                 
                  className="d-flex justify-content-between align-items-center list-unstyled px-0 py-2"
                >
                  <Suitcase />
                  <div className="ms-4 me-auto">
                    <div className="pt-2">5-8 Years</div>
                  </div>
            
                </li>
                <li
                 
                  className="d-flex justify-content-between align-items-center list-unstyled px-0 py-2"
                >
                  <FlashIcon/>
                  {/* <Suitcase /> */}
                  <div className="ms-4 me-auto">
                    <div className="pt-2">Not Disclosed</div>
                  </div>
            
                </li>
                <li
                 
                  className="d-flex justify-content-between align-items-center list-unstyled px-0 py-2"
                >
                  <Location/>
                  <div className="ms-4 me-auto">
                    <div className="pt-2 ps-2">Delhi</div>
                  </div>
            
                </li>
              </ul>
              <hr></hr>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-5 ps-md-5">
               <div className="p-3 shadow rounded-3">

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
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Total years of experience</Form.Label>
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
                  <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>TUpload Resume/CV</Form.Label>
                    <Form.Control type="file"  />
                  </Form.Group>
                   <div className="pt-3 text-center">
                   <Button variant="primary" className=" w-100 text-white" type="submit">
                   Apply Now
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

export default JobDetails;
