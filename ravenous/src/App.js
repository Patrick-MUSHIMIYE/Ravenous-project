import "./App.css";
import SearchBar from "./components/searchBar";
import BusinessList from "./businessList";

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

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
];

function App() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Ravenous</h1>
        </div>
        <SearchBar />
      </div>
      <div className="body">
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App;
