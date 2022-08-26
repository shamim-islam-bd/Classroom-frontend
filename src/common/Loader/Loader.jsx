import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <ThreeCircles
        height="100"
        width="100"
        color="#4F46E5"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
