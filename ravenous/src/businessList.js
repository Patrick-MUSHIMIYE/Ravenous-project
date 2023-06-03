import React from "react";
import Business from "./components/business";

const BusinessList = ({ businesses }) => {
  return(
  <div className="bus">
    {businesses.map((business) => {
      return <Business business={business} key={business} />;
    })}
  </div>

)};

export default BusinessList;
