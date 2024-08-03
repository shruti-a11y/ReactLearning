import React from "react";


// we can use destructing also
// weather:{formattedLocalTime,name,country} in place of props and use them directly
const TimeAndLocation = (props) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">
          {/* current inform from weather */}
          {props.weather.formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
      <p className="text-3xl font-medium">{`${props.weather.name} , ${props.weather.country}`}</p>
    </div>
    </div>
  );
};

export default TimeAndLocation;
