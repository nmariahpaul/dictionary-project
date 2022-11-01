import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="mt-4">{props.meaning.partOfSpeech}:</h4>
      {props.meaning.definitions.map(function(definitions, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definitions.definition}
              <br />
              <strong>Example:</strong>
              <em> {definitions.example}</em>
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
