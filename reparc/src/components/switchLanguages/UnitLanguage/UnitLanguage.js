import React from "react";
import "./UnitLanguage.css";

const UnitLanguage = props => {
  return (
    <div className="languageContainer">
      <div className="flagContainer">
        <img src={props.pic} alt="flag" className="flag" />
      </div>
      <div className="nameContainer">
        <p className="name">{props.country}</p>
      </div>
    </div>
  );
};

export default UnitLanguage;
