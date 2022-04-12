import React, { useEffect} from "react";
import Slider from "react-slick";
import { ReactComponent as QuoteIcon } from "../assets/icons/format_quote_black_24dp.svg";
import { review } from "./Data";
import { slickheightequal } from "./main";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <button className="btn px-2 text-primary btn-light bg-white border-white btn-hover-primary translate-middel-x">
        <i className="bi bi-caret-left-fill"></i>
      </button>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <button className="btn px-2 text-primary btn-light bg-white border-white btn-hover-primary">
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
}

function TestimonialCarousel() {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "100px",
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px"
        }
      }
    ]
  };

  useEffect(() => {
    slickheightequal();
  });

  return (
    <>
      <div className="testimonial-carousel slick-height-equal slick-arrow-before-none">
        <Slider {...settings}>
          {review.map((value, i) => (
            <div className="card testimonial-card h-100" key={i}>
              <div className="row g-0 h-100">
                <div className="col-xl-4 img-holder">
                  <img
                    src="assets/images/user.png"
                    className="img-fluid object-fit-cover rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-xl-8 h-100 d-flex align-items-xl-center">
                  <div className="card-body w-100">
                    <div className="quote-left w-100 d-flex justify-content-end">
                      <QuoteIcon />
                    </div>
                    <h4 className="card-title">{value.title}</h4>
                    <p className="card-text fs-18px">
                      {value.message}
                    </p>
                    <p className="card-text">
                      <small className="h6">- {value.name}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TestimonialCarousel;
