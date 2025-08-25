"use client";
import React, { useState } from "react";

export function ToggleMe() {
  const [isOn, setIsOn] = useState(true);
  const handleOnClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleOnClick}>toggleMe</button>
      {isOn && <p>xaxaxa</p>}
    </div>
  );
}
