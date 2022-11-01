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
            <div className="definition">{definitions.definition}</div>
            <div className="example">
              {definitions.example}
              <Synonyms synonyms={definitions.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
