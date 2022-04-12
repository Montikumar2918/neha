import React, {useEffect} from "react";
import Slider from "react-slick/lib/slider";
import { slickheightequal } from "./main";
import PopularProductItem from "./PopularProductItem"; 

const ProductCarousel = () => { 
  
  useEffect(() => {

    slickheightequal()

  });

  const productdata = [
    {
      id: "1",
      ProductImage: "assets/images/product/product1.png",
      ProductName: "NEHA HERBAL MEHANDI 55G",
      PackNumber: "6",
      Link: "#" 
    },
    {
      id: "1",
      ProductImage: "assets/images/product/product2.png",
      ProductName: "NEHA HERBAL MEHANDI 55G gdhju hdh dhhd hdhd",
      PackNumber: "6",
      Link: "#" 
    },
    {
      id: "1",
      ProductImage: "assets/images/product/product3.png",
      ProductName: "NEHA HERBAL MEHANDI 55G",
      PackNumber: "6",
      Link: "#" 
    },
    {
      id: "1",
      ProductImage: "assets/images/product/product4.png",
      ProductName: "NEHA HERBAL MEHANDI 55G",
      PackNumber: "6",
      Link: "#" 
    }
  ]

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }, 
    ],
  };

  return (

    

    <>
      <div className="three-product-carousel slick-height-equal">
        <Slider {...settings}>
          {productdata.map((value, index) => { 
            return <PopularProductItem value={value}/>
          })}
        </Slider>
      </div>
    </>
  );
}

export default ProductCarousel;
