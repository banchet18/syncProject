const Result = () => {
  return (
    <div className="shadow mt-5 p-2">
      <h2 className=" text-4xl text-center"> city Name </h2>
      <div className=" text-2xl flex justify-around my-2">
        <div>max temp : 40deg</div>
        <div>min temp: 60deg</div>
      </div>
      <div className=" text-2xl flex justify-around my-2">
        <div>Icon</div>
        <div>weather type</div>
      </div>
    </div>
  );
};
export default Result;
