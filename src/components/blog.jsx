import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">Sept 1,2023</p>
          <h5 className="title">Great Time for VR</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            quibusdam laudantium, doloremque delectus suscipit et incidunt amet
            iure non perspiciatis. Neque inventore, alias iure blanditiis fuga
            recusandae accusamus odit voluptatem.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
