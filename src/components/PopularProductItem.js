import React from "react";

const PopularProductItem = ({value}) => {

  return (
    <>
     <div className="card h-100 mx-2 product-card overflow-hidden">
      <div className="card-image img-holder">
        <img
          src={value.ProductImage}
          alt=""
          className="object-fit-cover"
        />
        <div className="badge bg-mehendi py-2 px-3 m-2 position-absolute top-0 end-0">
          New
        </div>
      </div>
      <div className="card-body px-0">
        <div className="row h-100 flex-column justify-content-between">
          <div className="col-12">
            <h6 className="card-title font-paragraph text-uppercase">
            {value.ProductName}
            </h6>
            <p>Pack of {value.PackNumber}</p>
          </div>
          <div className="col-12 d-grid align-items-center">
            <a href="#" className="btn btn-primary card-btn w-100">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PopularProductItem;
