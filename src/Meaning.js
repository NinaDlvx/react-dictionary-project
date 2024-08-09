import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">
        {props.meaning.definition}
        <br />
        <em className="example">{props.meaning.example}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
