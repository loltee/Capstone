import React from "react";
import Sidenav from "../components/sidenav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

// const Home = () => {
//   let items = [
//     {
//       title: "Camera",
//       count: "10 Items",
//       image: "images/camera.jpg",
//       imageAlt: "camera",
//     },
//     {
//       title: "Television",
//       count: "5 Items",
//       image: "images/tv.jpg",
//       imageAlt: "television",
//     },
//     {
//       title: "Camera",
//       count: "10 Items",
//       image: "images/camera.jpg",
//       imageAlt: "camera",
//     },
//     {
//       title: "Television",
//       count: "5 Items",
//       image: "images/tv.jpg",
//       imageAlt: "television",
//     },
//     {
//       title: "Camera",
//       count: "10 Items",
//       image: "images/camera.jpg",
//       imageAlt: "camera",
//     },
//     {
//       title: "Television",
//       count: "5 Items",
//       image: "images/tv.jpg",
//       imageAlt: "television",
//     },
//     {
//       title: "Camera",
//       count: "10 Items",
//       image: "images/camera.jpg",
//       imageAlt: "camera",
//     },
//     {
//       title: "Television",
//       count: "5 Items",
//       image: "images/tv.jpg",
//       imageAlt: "television",
//     },
//   ];

//   let els = [];

//   for (let i = 0; i < items.length; i++) {
//     if (i % 2 === 0) {
//       els.push(<Carousel.Item />);
//     } else {
//       els.push(<Carousel.Item />);
//     }

//     els.push(
//       <div className="col-2">
//         <div className="categories d-flex justify-content-between align-items-center position-relative px-10">
//           <div className="cameras d-flex align-items-between">
//             <h6>{items[i].title}</h6>
//             <p>{items[i].count}</p>
//             <div className="camera position-relative translate-middle-x ">
//               <img src={items[i].image} alt={items[i].imageAlt} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <section className="home-wrapper-1 py-5">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-6">
//               <div className="main-banner position-relative p-3">
//                 <img
//                   src="images/main-banner-1.jpg"
//                   className="img-fluid rounded-3"
//                   alt="main banner"
//                 />
//                 <div className="main-banner-content">
//                   <h1>Awsome Probuds</h1>
//                   <h2>Beats by Dre</h2>
//                   <p>Starting at $699 or $34.40 mo</p>
//                   <Link className="button">Buy Now</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
//                 <div className="macbook small-banner position-relative justify-content-center p-3">
//                   <img
//                     src="images/catbanner-01.jpg "
//                     className="img-fluid rounded-3"
//                     alt="main banner"
//                   />
//                   <div className="macbook-banner-content">
//                     <h5>All New Macbooks</h5>
//                     <h2>Macbook Air</h2>
//                     <p>$1299 or $98.00 mo</p>
//                   </div>
//                 </div>
//                 <div className="watch-banner small-banner position-relative justify-content-center p-3">
//                   <img
//                     src="images/catbanner-02.jpg "
//                     className="img-fluid rounded-3"
//                     alt="main banner"
//                   />
//                   <div className="watch-banner-content">
//                     <h5>Adventure Awaits </h5>
//                     <h2>Watch Ultra</h2>
//                     <p>$799 or $50.00 mo</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
//                   <div className="tablet-banner small-banner position-relative justify-content-center p-3">
//                     <img
//                       src="images/catbanner-03.jpg "
//                       className="tablet rounded-3"
//                       alt="main banner"
//                     />
//                     <div className="tablet-banner-content">
//                       <h5>New Tablets</h5>
//                       <h2>Samsung</h2>
//                       <p>$599 or $45.80 mo</p>
//                     </div>
//                   </div>
//                   <div className=" beats small-banner position-relative justify-content-center align-items-center p-3">
//                     <img
//                       src="images/catbanner-04.jpg "
//                       className="headphone rounded-3"
//                       alt="main banner"
//                     />
//                     <div className="beats-banner-content">
//                       <h5>New Brands</h5>
//                       <h2>Bose</h2>
//                       <p>$299 or $25.00 mo</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="home-wrapper-2 py-5">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="services d-flex align-items-center justify-content-between">
//                 <div>
//                   <img src="images/service.png" alt="services" />
//                   <h6>Free Shipping</h6>
//                   <p>Over $100</p>
//                 </div>
//                 <div>
//                   <img src="images/service-02.png" alt="services" />
//                   <h6>Special Offers</h6>
//                   <p>Get up to 35% off</p>
//                 </div>
//                 <div>
//                   <img src="images/service-03.png" alt="services" />
//                   <h6>Customer Support 24/7</h6>
//                   <p>Need Help? We are here!</p>
//                 </div>
//                 <div>
//                   <img src="images/service-04.png" alt="services" />
//                   <h6>Affordable Prices</h6>
//                   <p>Cheaper than Most!</p>
//                 </div>
//                 <div>
//                   <img src="images/service-05.png" alt="services" />
//                   <h6>Secure Payments</h6>
//                   <p>Pay with ease class</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="home-wrapper-2 py-5">
//         <div className="container-xxl">
//           <div className="row" style={{ backgroundColor: "white" }}>
//             <Carousel>
//               <Carousel.Item>{els}</Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

//  when using rounder-3 it makes the image corners and size rounded by 3px */

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
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
              <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                <div className="macbook small-banner position-relative justify-content-center p-3">
                  <img
                    src="images/catbanner-01.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="macbook-banner-content">
                    <h5>All New Macbooks</h5>
                    <h2>Macbook Air</h2>
                    <p>$1299 or $98.00 mo</p>
                  </div>
                </div>
                <div className="watch-banner small-banner position-relative justify-content-center p-3">
                  <img
                    src="images/catbanner-02.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="watch-banner-content">
                    <h5>Adventure Awaits </h5>
                    <h2>Watch Ultra</h2>
                    <p>$799 or $50.00 mo</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                  <div className="tablet-banner small-banner position-relative justify-content-center p-3">
                    <img
                      src="images/catbanner-03.jpg "
                      className="tablet rounded-3"
                      alt="main banner"
                    />
                    <div className="tablet-banner-content">
                      <h5>New Tablets</h5>
                      <h2>Samsung</h2>
                      <p>$599 or $45.80 mo</p>
                    </div>
                  </div>
                  <div className=" beats small-banner position-relative justify-content-center align-items-center p-3">
                    <img
                      src="images/catbanner-04.jpg "
                      className="headphone rounded-3"
                      alt="main banner"
                    />
                    <div className="beats-banner-content">
                      <h5>New Brands</h5>
                      <h2>Bose</h2>
                      <p>$299 or $25.00 mo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div>
                  <img
                    src="images/service.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Free Shipping</h6>
                  <p>Over $100</p>
                </div>
                <div>
                  <img
                    src="images/service-02.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Special Offers</h6>
                  <p>Get up to 35% off</p>
                </div>
                <div>
                  <img
                    src="images/service-03.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Customer Support 24/7</h6>
                  <p>Need Help? We are here!</p>
                </div>
                <div>
                  <img
                    src="images/service-04.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Affordable Prices</h6>
                  <p>Cheaper than Most!</p>
                </div>
                <div>
                  <img
                    src="images/service-05.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Secure Payments</h6>
                  <p>Pay with ease!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories">
                <div className="headers">
                  <h6>Cameras</h6>
                  <h6>Headphones</h6>
                  <h6>Televisions</h6>
                  <h6>Laptops</h6>
                  <h6>Watches</h6>
                </div>
                <div className="items d-flex flex-wrap align-items-between">
                  <div className="items flex-wrap position-relative">
                    <img
                      src="images/camera.jpg"
                      alt="camera"
                      className="itemimage"
                    />
                  </div>
                  <div className="items flex-wrap position-relative  ">
                    <img
                      src="images/headphone.jpg"
                      alt="headphone"
                      className="itemimage"
                    />
                  </div>
                  <div className="items  flex-wrap d-flex justified-items-between align-items-center position-relative  ">
                    <img src="images/tv.jpg" alt="tv" className="itemimage" />
                  </div>
                  <div className="items  flex-wrap d-flex justified-items-between align-items-center position-relative   ">
                    <img
                      src="images/laptop.jpg"
                      alt="laptop"
                      className="itemimage"
                    />
                  </div>
                  <div className="items flex-wrap d-flex justified-items-between align-items-center  position-relative  ">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="itemimage"
                    />
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

// remember to move the p tag out of the same div as the image.
