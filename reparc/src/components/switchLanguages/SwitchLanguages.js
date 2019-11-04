import React, { Component } from "react";
import UnitLanguage from "../switchLanguages/UnitLanguage/UnitLanguage";
import flag1 from "../../assets/images/GermanFlag.png";
import flag2 from "../../assets/images/USFlag.jpg";
import "./SwitchLanguage.css";
import swapButton from "../../assets/images/arrows.png";
import { connect } from "react-redux";
import {addList,getPost} from "../../action/action";
class SwitchLanguage extends Component {
  state = {
    ifClicked: false,
    ifAnimated: false,
    text: ""
  };
  componentDidMount=()=>{
    this.props.showList();
  }
  swapHandler = () => {
    this.setState({
      ifClicked: !this.state.ifClicked,
      ifAnimated: !this.state.ifAnimated
    });
  };

  addNew = event => {
    this.setState({ text: event.target.value });
  };

  submitHandler=(event)=>{
    event.preventDefault();
    this.props.addNewList(this.state.text);
  }

  render() {
    //console.log(this.state.text);
    const { ifAnimated } = this.state.ifAnimated;

    const classnames = [
      "lang1",
      ifAnimated ? "lang1Wrapper--ani" : "lang1Wrapper"
    ];

    let lang1 = (
      <div className={classnames.join(" ")}>
        <UnitLanguage country="German" pic={flag1} />
      </div>
    );

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
        <div>
          <form onSubmit={this.submitHandler}>
          <input type="text" onChange={event => this.addNew(event)} />
          <button>Submit</button>
          </form>
          
        </div>
        <div>{this.props.myList.name}</div>
        <div>{this.props.myList.list}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { myList: state.myList };
};

const mapDispatchToProps=(dispatch)=>{
  return {
    addNewList:(list)=>dispatch(addList(list)),
    showList: ()=>dispatch(getPost())

}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchLanguage);
