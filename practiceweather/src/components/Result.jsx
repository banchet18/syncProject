const Result = ({ weatherData }) => {
  return (
    <div className="shadow mt-5 p-2">
      <h2 className=" text-4xl text-center">{weatherData.name}</h2>
      <div className=" text-2xl flex justify-around my-2">
        <div>temp : {Math.floor(weatherData.main.temp / 10)}</div>
      </div>
      <div className=" text-2xl flex justify-around my-2">
        <div>Icon</div>
        <div>sdf</div>
      </div>
    </div>
  );
};
export default Result;
