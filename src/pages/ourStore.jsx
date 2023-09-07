import React from "react";
import Breadcrumb from "../components/Breadcrumb";

import Meta from "../components/meta";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <Breadcrumb title={"Our Store"} />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watches</li>
                    <li>Televisions</li>
                    <li>Cellphones</li>
                    <li>Laptops</li>
                    <li>Cameras</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By </h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              </div>
              <div className="col-9"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
