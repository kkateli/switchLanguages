import React from "react";
import "./UnitLanguage.css";

const UnitLanguage = props => {
  return (
    <div className="languageContainer">
      <div className="flagContainer">
        <img src={props.pic} alt="flag" className="flag"/>
        </div>
        <p>{props.country}</p>
     
    </div>
  );
};

export default UnitLanguage;
