import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div className="DisplayName">
        <h6>
          Hello World , I am {this.props.name}
          and My age is {this.props.age}
        </h6>
      </div>
    );
  }
}

export default Name;
