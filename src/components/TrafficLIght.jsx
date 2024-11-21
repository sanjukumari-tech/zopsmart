import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green"); //  color is green initially

  useEffect(() => {
    let timer;

    const cycleColors = () => {
      if (color === "green") {
        timer = setTimeout(() => {
          setColor("yellow");
          cycleColors();
        }, 3000); // Green to Yellow after 3 seconds
      } else if (color === "yellow") {
        timer = setTimeout(() => {
          setColor("red");
          cycleColors();
        }, 2000); // Yellow to Red after 2 seconds
      } else if (color === "red") {
        timer = setTimeout(() => {
          setColor("yellow");
          cycleColors();
        }, 5000); // Red to Yellow after 5 seconds
      } else if (color === "yellow") {
        timer = setTimeout(() => {
          setColor("green");
          cycleColors();
        }, 2000); // Yellow to Green after 2 seconds
      }
    };

    cycleColors();

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [color]);

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        color: "white",
      }}
    >
      {color.toUpperCase()}
    </div>
  );
};

export default TrafficLight;
