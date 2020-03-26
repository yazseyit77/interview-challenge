import React, { Components, Component } from "react";

class FetchData extends Component {
  componentDidMount() {
    fetch("../JSON/data.json")
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return <div></div>;
  }
}

export default FetchData;
