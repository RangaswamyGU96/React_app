import React from "react";
import Name from "./Name";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displaycontent: true,
      persons: [
        { id: "1", name: "Rangaswamy G U ", age: " 24" },
        { id: "2", name: "john ibrahim ", age: "30" },
        { id: "3", name: "Myalri ", age: "28" }
      ]
    };
  }
  togglethediv = () => {
    const doesshow = this.state.displaycontent;
    this.setState({
      displaycontent: !doesshow
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.togglethediv}>Toggle the content</button>
        </div>
        {this.state.displaycontent === true ? (
          <div className="Nametiles">
            {/* outputing as list */}
            {this.state.persons.map(personlist => {
              return (
                <Name
                  name={personlist.name}
                  age={personlist.age}
                  key={personlist.id}
                />
              );
            })}
            {/* 
            outputing array as props */}
            {/* <Name
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Name
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            /> */}
          </div>
        ) : null}
      </div>
    );
  }
}
export default ConditionalRender;
