import React from "react";

const Business = ({ business }) => {
  return (
    <div>
      <img src={business.imageSrc} height="300" width="300" alt="pizza"/>
      <h1>{business.name}</h1>
      <p>{business.address}{business.city}</p>
      <p>{business.state}{business.zipCode}</p>
      <p>{business.category}{business.rating}</p>
      <p>{business.reviewCount}</p>
    </div>
  );
};

export default Business;
