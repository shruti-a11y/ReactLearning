import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = () => {
    // for search and current localtion
  const btnStyle = "cursor-pointer transition ease-out hover:scale-125";

  // for matrix for tempature
  const btnStyle2 = "text-xl font-medium transition ease-out hover:scale-125";

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 justify-center space-x-3 items-center">
        <input
          type="text"
          placeholder="search by city"
          className="border-none text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch size={30} className={btnStyle} />
        <BiCurrentLocation size={30} className={btnStyle} />
      </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
        <button className={btnStyle2}>°C</button>
        <p className="text-2xl font-light mx-1">|</p>
        <button className={btnStyle2}>°F</button>
        </div>

    </div>
  );
};

export default Inputs;
