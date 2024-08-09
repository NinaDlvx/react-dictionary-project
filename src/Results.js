import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div>
          <h2>{props.results.word}</h2>
          <h3>Pronunciation</h3>
          <p>
            <i>/ {props.results.phonetic} /</i>
          </p>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
