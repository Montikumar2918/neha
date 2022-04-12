import React from "react";
import HomeBannerCarousel from "../components/HomeBannerCarousel";
import ProductCarousel from "../components/ProductCarousel";
import { AllGender, Leaf, MapMarker, UserWave } from "../components/Icons";
import IndiaMap from "../components/IndiaMap";
import InstagramFeeds from "../components/InstagramFeeds";
import TestimonialCarousel from "../components/TestimonialCarousel";

function Home() {
  // ------------------------------
  // THIS USEEFFECT IS FOR VIDEO PLAY ON LOAD
  // ------------------------------

  // useEffect(() => {
  //   let herovideo = document.getElementById("herovideo");

  //   function playBannerVideo(){
  //     if(!herovideo.paused === true){
  //       console.log("video is playing");
  //     }else{
  //       console.log("video is not palying");
  //       if(window.scrollY < window.innerHeight/2){
  //         herovideo.loop = "true";
  //         herovideo.muted = "true";
  //         herovideo.playsinline = "true";
  //         herovideo.play()
  //       }else{
  //         herovideo.loop = "false";
  //         herovideo.muted = "false";
  //         herovideo.playsinline = "false";
  //         herovideo.pause()
  //       }
  //     }
  //   }

  //   setInterval(playBannerVideo, 1000)
  // });

  return (
    <>
      <div className="banner">
        <HomeBannerCarousel></HomeBannerCarousel>
      </div>

      <section>
        <div className="container">
          <div className="row gy-4">
            <div className="col-12 section-heading text-center">
              <h4 className="fw-normal mb-0">How our story began </h4>
              <h2 className="main-heading">29 years ago</h2>
            </div>
            <div className="col-lg-8 col-md-10 mx-auto text-center">
              <p>
                Since its inception in 1992, Neha Herbals nurtures simple values
                of being close to nature, purity and being based in Science.
                With a philosophy to embrace nature &#38; science in the most
                balanced form, Neha commits to natural solutions. Our Hair care
                and Henna range comprises products that are gentle, effective
                and safe for long time term use.
                <a href="/about" className="text-dark btn-link fw-medium">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 mt-4">
          <div className="img-holder">
            <img
              src="assets/images/about-neha-harbal.png"
              alt=""
              className="img-fluid w-100"
            />
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-6">
              <div className="img-holder margintop-negative col-10 mx-auto">
                <img
                  src="assets/images/why-neha-harbal-is-defferent.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12 section-heading text-lg-start text-center mb-4">
                  <h2 className="main-heading">Why we are different?</h2>
                </div>
                <div className="col-12">
                  <div className="row gy-4">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-auto pt-1">
                          <MapMarker />
                        </div>
                        <div className="col">
                          <h4 className="mb-0">Sourced from Mehandi Nagri</h4>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Porta at eu tempus pharetra in mollis. Non
                            diam enim in sed eu scelerisque.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-auto pt-1">
                          <AllGender />
                        </div>
                        <div className="col">
                          <h4 className="mb-0">Mehandi for All</h4>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Porta at eu tempus pharetra in mollis. Non
                            diam enim in sed eu scelerisque.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-auto pt-1">
                          <UserWave />
                        </div>
                        <div className="col">
                          <h4 className="mb-0">No Side Effects</h4>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Porta at eu tempus pharetra in mollis. Non
                            diam enim in sed eu scelerisque.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-auto pt-1">
                          <Leaf />
                        </div>
                        <div className="col">
                          <h4 className="mb-0">100% Organic Natural</h4>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Porta at eu tempus pharetra in mollis. Non
                            diam enim in sed eu scelerisque.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0">
        <div className="container">
          <div className="row gy-4">
            <div className="col-12 section-heading text-center">
              <h2 className="h1 mb-0">Our Categories</h2>
            </div>
            <div className="col-12 pt-0 mt-0 mx-auto text-center">
              <div className="img-holder">
                <img
                  src="assets/images/hair-essentials-services.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-12 mx-auto text-center">
              <div className="img-holder">
                <img
                  src="assets/images/hand-essentials-services.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-12 mx-auto text-center">
              <div className="img-holder">
                <img
                  src="assets/images/personal-care-services.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products pb-0">
        <div className="container">
          <div className="row gy-4">
            <div className="col-12 section-heading text-center">
              <h2 className="h1">Popular Products</h2>
            </div>
            <div className="col-12">
              <ProductCarousel/>
            </div>
          </div>
        </div>
      </section>

      <section className="map pb-0">
        <div className="container">
          <div className="row gy-4">
            <div className="col-12 section-heading text-center">
              <h2 className="h1">Our Existence in India</h2>
            </div>
            <div className="col-12">
              <IndiaMap/>
            </div>
          </div>
        </div>
      </section> 

      <section className="instagramfeed pb-0">
        <div className="container pt-4">
          <div className="row gy-4">
            <div className="col-12 section-heading text-center">
              <h2 className="h1">Neha Herbals Moments</h2>
            </div>
            <div className="col-12">
              <InstagramFeeds/>
            </div>
          </div>
        </div>
      </section>

      
      <section className="testimonial">
        <div className="container px-sm-3 px-0 py-4">
          <div className="row gy-4">
            <div className="col-12 section-heading text-center">
              <h2 className="h1">Customer Speaks</h2>
            </div>
            <div className="col-lg-11 mx-auto">
              <TestimonialCarousel/>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
