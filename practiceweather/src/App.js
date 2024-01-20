import Search from "./components/Search";
import Result from "./components/Result";
import { useEffect, useState } from "react";
import axios from "react-axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a3c79758b7d82414f9b304fec4991587`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" max-w-[1280px] mx-auto mt-2 p-3 ">
      <Search
        searchData={search}
        eventhandler={changeSearch}
        searchWeather={searchWheatherHandler}
      />
      <Result weatherData={weather} />
    </div>
  );
};
export default App;
