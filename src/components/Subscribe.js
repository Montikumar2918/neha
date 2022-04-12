import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";


const Subscribe = () => {
    return (
        <>
            <section className="bg-subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="row align-items-baseline">
                                <div className="col-lg-auto text-lg-start text-center pb-lg-0 pb-2">
                                    <p className="mb-0 fw-bold fs-18px">Let’s Keep in touch:</p>
                                </div>
                                <div className="col">
                                    <div>
                                        <InputGroup className="">
                                            <FormControl
                                                placeholder="Enter your email address"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                className="ps-4"
                                            />
                                            <InputGroup.Text id="basic-addon2" className="px-4">
                                                Subscribe
                                            </InputGroup.Text>
                                        </InputGroup></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Subscribe;
