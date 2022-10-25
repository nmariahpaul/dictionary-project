import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordSearch(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the defintion of ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          className="form-control"
          onChange={handleKeywordSearch}
        />
      </form>
    </div>
  );
}
