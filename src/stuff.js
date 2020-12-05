import React, { Component } from "react";
import { Link } from "react-router-dom";

function markup(string) {
  return { __html: string };
}

class Back extends Component {
  render() {
    return [
      <Link to={this.props.dest}>
        <div className="back">
          <p>Back</p>
        </div>
      </Link>,
    ];
  }
}

class Para extends Component {
  render() {
    return [
      <p
        className={this.props.className}
        dangerouslySetInnerHTML={markup(this.props.txt)}
      />,
    ];
  }
}

export { Para, Back };
