import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
import { createGroup, createGroupDiv } from "./utils.js";
import "./index.css";



class Main extends React.Component {
  //minWidth MQ == for desktop
  //maxWidth MQ == for mobile
  render() {
    return (
      <div>
        <Group1 />
        <Group2 />
        <MediaQuery minWidth={600}>
          <Group3 />
          <Group4 />
        </MediaQuery>
        <MediaQuery maxWidth={599}>
          <Group4 />
          <Group3 />
        </MediaQuery>
        <Group5 />
      </div>
    );
  }
}


class Group1 extends React.Component {
  render() {
    return createGroup(1, [{ "dNum": 1, "classNames": "fill_own_group" }])
  }
}


class Group2 extends React.Component {
  //minWidth MQ == for desktop
  //maxWidth MQ == for mobile
  render() {
    return (
      <div id="group2">
        <MediaQuery minWidth={600}>
          { createGroupDiv(2, {"dNum": 2 }) }
          { createGroupDiv(2, {"dNum": 3 }) }
          { createGroupDiv(2, {"dNum": 4 }) }
        </MediaQuery>
        <MediaQuery maxWidth={599}>
        { createGroupDiv(2, {"dNum": 3 }) }
        { createGroupDiv(2, {"dNum": 4 }) }
        { createGroupDiv(2, {"dNum": 2 }) }
        </MediaQuery>
      </div>
    );
  }
}


class Group3 extends React.Component {
  render() {
    return createGroup(3, [{ "dNum": 5 }, {"dNum": 6 }]);
  }
}


class Group4 extends React.Component {
  render() {
    return createGroup(4, [ { "dNum": 7, "classNames": "fill_own_group" }])
  }
}


class Group5 extends React.Component {
  render() {
    return createGroup(5, [{ "dNum": 8 }, {"dNum": 9 }]);
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById("root")
)
