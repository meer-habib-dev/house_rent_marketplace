import React from "react";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/badgeIcon.svg";
import bathTubIcon from "../assets/svg/bathtubIcon.svg";
import { Link } from "react-router-dom";
const ListingItem = ({ listing, id, onDelete }) => {
  console.log(id);
  return (
    <div>
      <li className="categoryListing">
        <Link
          to={`/category/${listing.type}/${id}`}
          className="categoryListingLink"
        >
          <img
            src={listing.image[0]}
            alt={listing.name}
            className="categoryListingImg"
          />
          <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
            <p className="categoryListingPrice">
              ${listing.offer ? listing.discountedPrice : listing.regularPrice}
              {listing.type === "rent" && " / month"}
            </p>
            <div className="categoryListingInfoDiv">
              <img src={bedIcon} alt="" />
              <p className="categoryListingInfoText">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : "1 Bedroom"}
              </p>
              <img src={bathTubIcon} alt="" />
              <p className="categoryListingInfoText">
                {listing.bathRooms > 1
                  ? `${listing.bathRooms} B athRooms`
                  : "1 BathRooms"}
              </p>
            </div>
          </div>
        </Link>
        {onDelete && (
          <DeleteIcon
            className="removeIcon"
            fill="rgb(231,79,80)"
            onClick={() => onDelete(listing.id, listing.name)}
          />
        )}
      </li>
    </div>
  );
};

export default ListingItem;
