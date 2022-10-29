import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="mt-4">{props.meaning.partOfSpeech}:</h4>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p className="mb-2">{definitions.definition}</p>
            <p>
              <em>{definitions.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
