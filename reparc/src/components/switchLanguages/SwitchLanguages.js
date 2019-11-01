import React, { Component } from "react";
import UnitLanguage from "../switchLanguages/UnitLanguage/UnitLanguage";
import flag1 from "../../assets/images/GermanFlag.png";
import flag2 from "../../assets/images/USFlag.jpg";
class SwitchLanguage extends Component {
    // state={
    //     country1:'German'
    // }
  render() {
    return (
      <div>
        <UnitLanguage country="German" pic={flag1}/>
        <UnitLanguage country="US" pic={flag2} />
      </div>
    );
  }
}
export default SwitchLanguage;
