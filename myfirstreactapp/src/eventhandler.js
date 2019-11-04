import React from "react";

class Eventhandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, Name: "Ranga" };
  }
  handleClick = () => {
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1
    });
  };
  handleClickname = () => {
    this.setState({
      Name: "swamy"
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Click To Count</button>
        <button onClick={e => this.handleClickname(e)}>
          {" "}
          Click To Change Name
        </button>
        <span>{this.state.number}</span>
        <span>{this.state.Name}</span>
        {/* <input type="text"> </input> */}
      </div>
    );
  }
}

export default Eventhandler;
