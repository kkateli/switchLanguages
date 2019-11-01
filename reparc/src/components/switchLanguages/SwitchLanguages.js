import React, { Component } from "react";
import UnitLanguage from "../switchLanguages/UnitLanguage/UnitLanguage";
import flag1 from "../../assets/images/GermanFlag.png";
import flag2 from "../../assets/images/USFlag.jpg";
import "./SwitchLanguage.css";
import swapButton from "../../assets/images/arrows.png";
class SwitchLanguage extends Component {
  // state={
  //     country1:'German'
  // }
  render() {
    return (
      <div>
        <UnitLanguage country="German" pic={flag1} />
<img  className="swapButton" src={swapButton} alt="button" />
        <UnitLanguage country="US" pic={flag2} />
      </div>
    );
  }
}
export default SwitchLanguage;
