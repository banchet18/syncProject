import { useRef } from "react";

const Search = (props) => {
  const searchinput = useRef();
  return (
    <div className=" flex shadow">
      <input
        type="search"
        className="border border-black w-full p-3 text-2xl"
        value={props.searchData}
        onChange={() => {
          props.eventhandler(searchinput.current.value);
        }}
        ref={searchinput}
      />
      <button className=" p-3 bg-slate-600 text-white">Search</button>
    </div>
  );
};
export default Search;
