import "./App.css";
import SearchBar from "./components/searchBar";
import BusinessList from "./businessList";

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
        <BusinessList />
        <BusinessList />
        <BusinessList />
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
