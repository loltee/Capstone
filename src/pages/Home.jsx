// import React from "react";
// import Sidenav from '../components/sidenav'
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner postion-relative p-3">
                <img
                  src="images/main-banner-1.jpg "
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content">
                  <h1>Awsome Probuds</h1>
                  <h2>Beats by Dre</h2>
                  <p>Starting at $699 or $34.40 mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-direction gap-2 justify-content-center align-items-center">
                <div className="small-banner postion-absolute justify-content-center p-3">
                  <img
                    src="images/catbanner-01.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="macbook-banner-content">
                    <h1></h1>
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
                <div className="small-banner postion-relative p-3">
                  <img
                    src="images/catbanner-02.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="watch ">
                    <h1> </h1>
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-direction gap-2 justify-content-center align-items-center">
                  <div className="small-banner postion-inherit justify-content-center p-3">
                    <img
                      src="images/catbanner-03.jpg "
                      className="tablet rounded-3"
                      alt="main banner"
                    />
                    <div className="macbook-banner-content">
                      <h1></h1>
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                  <div className="small-banner postion-relative p-3">
                    <img
                      src="images/catbanner-04.jpg "
                      className="headphone rounded-3"
                      alt="main banner"
                    />
                    <div className="watch ">
                      <h1> </h1>
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

{
  /* when using rounder-3 it makes the image corners and size rounded by 3px */
}
