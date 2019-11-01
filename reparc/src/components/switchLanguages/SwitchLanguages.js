import React, { Component } from "react";
import UnitLanguage from "../switchLanguages/UnitLanguage/UnitLanguage";
import flag1 from "../../assets/images/GermanFlag.png";
import flag2 from "../../assets/images/USFlag.jpg";
import "./SwitchLanguage.css";
class SwitchLanguage extends Component {
  // state={
  //     country1:'German'
  // }
  render() {
    return (
      <div>
        <UnitLanguage country="German" pic={flag1} />

        <div className="us">
          <UnitLanguage country="US" pic={flag2} />
        </div>
      </div>
    );
  }
}
export default SwitchLanguage;
