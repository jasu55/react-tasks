"use client";
import React, { useState } from "react";

export function InputFieldValue() {
  const [inputValue, setInputValue] = useState("");
  const [innerText, setInnerText] = useState("");
  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };
  const handleOnClick = () => {
    setInnerText(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={handleOnchange}
        className="bg-blue-50"
      />
      <button onClick={handleOnClick}>Add1</button>
      {innerText}
    </div>
  );
}
