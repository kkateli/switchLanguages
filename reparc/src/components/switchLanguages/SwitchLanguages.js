import React, { Component } from "react";
import UnitLanguage from "../switchLanguages/UnitLanguage/UnitLanguage";
import flag1 from "../../assets/images/GermanFlag.png";
import flag2 from "../../assets/images/USFlag.jpg";
import "./SwitchLanguage.css";
import swapButton from "../../assets/images/arrows.png";
class SwitchLanguage extends Component {
  state = {
    ifClicked: false
  };
  swapHandler = () => {
    this.setState({ ifClicked: !this.state.ifClicked });
  };
  render() {
    let lang1 = <UnitLanguage country="German" pic={flag1} />;

    let lang2 = <UnitLanguage country="US" pic={flag2} />;
    if (this.state.ifClicked !== false) {
      lang2 = <UnitLanguage country="German" pic={flag1} />;

      lang1 = <UnitLanguage country="US" pic={flag2} />;
    }

    return (
      <div>
        {lang1}
        <img
          className="swapButton"
          src={swapButton}
          alt="button"
          onClick={this.swapHandler}
        />
        {lang2}
      </div>
    );
  }
}
export default SwitchLanguage;
