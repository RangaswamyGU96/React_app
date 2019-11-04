import React from "react";

class Formexample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
    this.handleoOnChange = this.handleoOnChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleoOnChange(event) {
    this.setState({ value: event.target.value });
  }

  handelSubmit(event) {
    alert("your name is " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div className="Namefield">
          <label>
            Enter Your Name :
            <input
              className="textfield"
              type="text"
              value={this.state.value}
              onChange={this.handleoOnChange}
            ></input>
            <input type="submit" value="Submit" />
          </label>

          <label>your name is : {this.state.value}</label>
          <label>
            Discreption{" "}
            <input
              type="textarea"
              value=" "
              onchange={this.handleoOnChange}
            ></input>
          </label>
        </div>
      </form>
    );
  }
}

export default Formexample;
