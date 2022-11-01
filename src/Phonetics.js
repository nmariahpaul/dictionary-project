import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics text-center">
      <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
