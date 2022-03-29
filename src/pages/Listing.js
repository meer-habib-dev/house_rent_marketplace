import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { db } from "../firebase.config";
import shareIcon from "../assets/svg/shareIcon.svg";
import { async } from "@firebase/util";
const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkedCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();
  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [navigate, params.listingId]);
  console.log(listing);
  return (
    <main>
      {/* slider */}
      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkedCopied(true);
          setTimeout(() => {
            setShareLinkedCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>
      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}
      <div className="listingDetails">
        <p className="listingName"></p>
        {listing?.name} - $
        {listing?.offer ? listing?.discountedPrice : listing?.regularPrice}
        <p className="listingLocation ">{listing?.location}</p>
        <p className="listingType">
          For {listing?.type === "rent" ? "Rent" : "Sale"}
        </p>
        {listing?.offer && (
          <p className="discountedPrice">
            ${listing?.regularPrice - listing?.discountedPrice} discount
          </p>
        )}
        <ul className="listingDetailsList">
          <li>
            {listing?.bedrooms > 1
              ? `${listing?.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </li>
          <li>
            {listing?.bathrooms > 1
              ? `${listing?.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </li>
          <li>{listing?.parking && "parking spot"}</li>
          <li>{listing?.furnished && "Furnished"}</li>
        </ul>
        <p className="listingLocationTitle">Location</p>
        {/* MAP */}
        {auth.currentUser?.uid !== listing?.userRef && (
          <Link
            to={`/contact/${listing?.userRef}?listingName=${listing?.name}`}
            className="primaryButton"
          >
            {" "}
            Contact Landlord
          </Link>
        )}
      </div>
    </main>
  );
};

export default Listing;
