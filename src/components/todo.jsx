"use client";
import React, { useState } from "react";

export function Todo() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setLists([...lists, inputValue]);
  };

  const handleDelete = (index) => {
    setLists(lists.filter((list, i) => i !== index));
  };

  return (
    <div>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="type here ..."
      />
      <button onClick={handleOnClick}>Add</button>
      <ul>
        {lists.map((list, index) => (
          <li className="list-disc" key={index}>
            {list}
            <button
              className="m-3"
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
