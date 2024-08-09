import React from "react";
import "./Results.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          <strong>Synonym(s): </strong>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym} /</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
