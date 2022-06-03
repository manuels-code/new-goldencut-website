import React from "react";

function Main(props) {
  return (
    <div className="relative">
      {props.children}
      <div className="bg-hero-bg h-screen w-full bg-cover fixed left-0 top-0 -z-[1]"></div>
      <div className="bg-overlay w-full h-screen fixed left-0 top-0 -z-[1]"></div>
    </div>
  );
}

export default Main;
