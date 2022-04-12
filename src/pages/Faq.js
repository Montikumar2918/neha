import React from "react";
import { Accordion } from "react-bootstrap";
import { Grayquote } from "../components/Icons";

const Faq = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="text-center py-lg-5 py-3">Frequently Asked Questions</h2>
          </div>
          <div className="row px-lg-4">
            <Accordion defaultActiveKey="0" className="faq px-0">
              <Accordion.Item eventKey="0" className='pb-2'>
                <Accordion.Header className="heading">
                   <Grayquote/>
                  <span className="ms-2 mb-0 ps-lg-4"> How Can I Contact You?</span>
                </Accordion.Header>
                <Accordion.Body className='mb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <div className="col-12 px-3">
                <hr className="my-0"/>
              </div>
              <Accordion.Item eventKey="1" className='pb-2'>
                <Accordion.Header className="heading">
                <Grayquote/>
                  <span className="ms-2 mb-0 ps-lg-4"> How Can I Buy Your Products?</span>
                </Accordion.Header>
                <Accordion.Body className='mb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <div className="col-12 px-3">
                <hr className="my-0"/>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
