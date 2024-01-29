import React from "react";

const Shimmer = () => {
  return (
    <div className="restaruant-list">
      {Array(10)
        .fill("")
        .map((e,index ) => (
          <div className="shimmercard" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
