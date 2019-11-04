import React, { Component } from "react";
import UnitLanguage from "../switchLanguages/UnitLanguage/UnitLanguage";
import flag1 from "../../assets/images/GermanFlag.png";
import flag2 from "../../assets/images/USFlag.jpg";
import "./SwitchLanguage.css";
import swapButton from "../../assets/images/arrows.png";
import { connect } from "react-redux";
class SwitchLanguage extends Component {
  state = {
    ifClicked: false,
    ifAnimated:false
  };
  swapHandler = () => {
    this.setState({ ifClicked: !this.state.ifClicked, ifAnimated:!this.state.ifAnimated});
  };
 

  
  render() {
    const {ifAnimated}=this.state.ifAnimated;

    const classnames = [
        'lang1',
        ifAnimated ? 'lang1Wrapper--ani': 'lang1Wrapper'
      ];

    let lang1 =(<div className={classnames.join(' ')}>
<UnitLanguage country="German" pic={flag1} />
    </div>) ;
 
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
        
        <div>{this.props.myList.name}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { myList: state.myList};
};


export default connect(mapStateToProps,null)(SwitchLanguage);
