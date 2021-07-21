import { Component } from "react";
import { init, cleanup } from "./fb";

export class Facebook2 extends Component {
  componentDidMount() {
    init();
  }

  componentWillUnmount() {
    cleanup();
  }

  render() {
    return (
      <div>
        <div id="fb-root"></div>

        <div id="fb-customer-chat" className="fb-customerchat"></div>
      </div>
    );
  }
}
