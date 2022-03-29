import React from "react";
import rentcategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellcategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        {/* slider */}
        <p className="exploreCategoryHeading"> Categories </p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentcategoryImage}
              alt="rent image"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Pleces for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellcategoryImage}
              alt="sell image"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Pleces for sell</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
