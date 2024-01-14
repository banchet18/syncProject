import "./App.css";
import { Search, MapPin, Wind } from "react-feather";

function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" />
        <button>
          <Search></Search>
        </button>
      </div>
      <div className="content">
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>
            London <span>(GB)</span>
          </h2>
        </div>
        <p className="datetext">2 october 2023</p>
        <div className="weatherdesc">
          <img src="" alt="" />
          <h3>Clear sky</h3>
        </div>
        <div className="tempstats d-flex flex-c">
          <h1>
            43 <span>&deg;C</span>
          </h1>
          <h3>
            Feels Like 44 <span>&deg;C</span>
          </h3>
        </div>
        <div className="windstats d-flex">
          <Wind></Wind>
          <h3>Wind is 20 knots is 45&deg;</h3>
        </div>
        <div className="content">
          <h4>No Data Found</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
