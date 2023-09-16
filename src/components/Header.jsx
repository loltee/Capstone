import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import LogOut from "./LogOut";

const Header = ({ token }) => {
  console.log("token", token);
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel +(800) 123-4567">
                  (800) 123-4567
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="cal-2">
              <h2>
                <Link className="title">Proper Gadgets</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="mic-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10"></div>
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 0</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="d-flex align-items-center gap-10 text-white">
          {token && <LogOut />}
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      variant="success"
                      id="dropdown-basic "
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-incline-block">
                        Shop Categories
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1">Jewelry</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Clothes</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Electronics
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// px means padding from left to right.
// py means padding from top to bottom.
// pe means padding from end.
// mb means margin bottom.
// pt means padding top.
// the link tang is also known as "a tag" which means it will not take color from our parent.
// for the link: remember change the name to something more presentable.
// p-3 means padding top bottom left and right.
// fs=font size
// to import images do images/acc.jpg
// if you dont add a alt attribute then it will reduce your performance.
// Reminder that a classname is needed for changing styles in css.
// git@github.com:loltee/capstone.git
