import React from "react";

// function formatname(user) {
//   if (user.firstname === "ranga") {
//     return user.firstname + user.lastnamep;
//   } else {
//     return "stranger";
//   }
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Now time is : {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

// class Welcome extends React.Component {
//   render() {
//     return <h2>Hello {this.props.name}</h2>;
//   }
// }
export default Clock;
