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
        <span>Now time is : {this.state.date.toLocaleTimeString()} </span>
      </div>
    );
  }
}

export default Clock;
