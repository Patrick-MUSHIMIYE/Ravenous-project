import React from "react";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const Business = () => {
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
