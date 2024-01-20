import Search from "./components/Search";
import Result from "./components/Result";
import { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const getWeatherData = () => {};

  useEffect(() => {
    getWeatherData();
  }, [search]);

  return (
    <div className=" max-w-[1280px] mx-auto mt-2 p-3 ">
      <Search searchData={search} eventhandler={changeSearch} />
      <Result weatherData={weather} />
    </div>
  );
};
export default App;
