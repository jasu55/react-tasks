"use client";
import React, { useState } from "react";

export function InputFieldLength() {
  const [inputValue, setInputValue] = useState("");
  const [innerText, setInnerText] = useState("");
  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };
  const handleOnClick = () => {
    setInnerText(inputValue.length);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={handleOnchange}
      />
      <button onClick={handleOnClick}>Add</button>
      <p>{innerText}</p>
    </div>
  );
}
