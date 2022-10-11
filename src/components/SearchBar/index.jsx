import React from "react";

export default function SearchBar() {
  return (
    <div className="">
      <ul className="tabs">
        <li>Find a Job</li>
        <li>Find a Candidate</li>
      </ul>
      <div className="">
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
}
