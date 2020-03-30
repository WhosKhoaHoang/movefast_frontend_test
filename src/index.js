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
        <MediaQuery minWidth={601}>
          <Group3 />
          <Group4 />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
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
    return createGroup(1, [{ "dNum": 1, "classNames": "fill_own_group bordify" }])
  }
}


class Group2 extends React.Component {
  //minWidth MQ == for desktop
  //maxWidth MQ == for mobile
  render() {
    return (
      <div id="group2">
        <MediaQuery minWidth={601}>
          { createGroupDiv(2, {"dNum": 2, "classNames": "bordify"}) }
          { createGroupDiv(2, {"dNum": 3, "classNames": "bordify"}) }
          { createGroupDiv(2, {"dNum": 4, "classNames": "bordify"}) }
        </MediaQuery>
        <MediaQuery maxWidth={600}>
        { createGroupDiv(2, {"dNum": 3, "classNames": "bordify" }) }
        { createGroupDiv(2, {"dNum": 4, "classNames": "bordify" }) }
        { createGroupDiv(2, {"dNum": 2, "classNames": "bordify" }) }
        </MediaQuery>
      </div>
    );
  }
}


class Group3 extends React.Component {
  render() {
    return createGroup(3, [{ "dNum": 5, "classNames": "bordify"},
                           { "dNum": 6, "classNames": "bordify"}]);
  }
}


class Group4 extends React.Component {
  render() {
    return createGroup(4, [ { "dNum": 7,
                              "classNames": "fill_own_group bordify" }])
  }
}


class Group5 extends React.Component {
  render() {
    return createGroup(5, [{ "dNum": 8, "classNames": "bordify"},
                           {"dNum": 9, "classNames": "bordify"}]);
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById("root")
)
