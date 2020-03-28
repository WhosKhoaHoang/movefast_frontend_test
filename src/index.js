import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
import "./index.css";


//TODO: Refactor for DRYness

function test() {
  let lst = [ <h1>YO#1</h1>, <h1>YO#2</h1>]
  return (
    <div>
        {lst.map((value) => { return value })}
    </div>
  );
}

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
    return (
      <div id="group1">
        <div id="d1" class="fill_own_group">
          <span class="center_text">1</span>
        </div>
      </div>
    );
  }
}


class Group2 extends React.Component {
  //minWidth MQ == for desktop
  //maxWidth MQ == for mobile
  render() {
    return (
      <div id="group2">
        <MediaQuery minWidth={600}>
          <div id="d2">
            <span class="center_text">2</span>
          </div>
          <div id="d3">
            <span class="center_text">3</span>
          </div>
          <div id="d4">
            <span class="center_text">4</span>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={599}>
          <div id="d3">
            <span class="center_text">3</span>
          </div>
          <div id="d4">
            <span class="center_text">4</span>
          </div>
          <div id="d2">
            <span class="center_text">2</span>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


class Group3 extends React.Component {
  render() {
    return (
      <div id="group3">
          <div id="d5">
            <span class="center_text">5</span>
          </div>
          <div id="d6">
            <span class="center_text">6</span>
          </div>
      </div>
    );
  }
}


class Group4 extends React.Component {
  render() {
    return (
      <div id="group4">
        <div id="d7" class="fill_own_group">
            <span class="center_text">7</span>
        </div>
      </div>
    );
  }
}


class Group5 extends React.Component {
  render() {
    return (
      <div id="group5">
        <div id="d8">
          <span class="center_text">8</span>
        </div>
        <div id="d9">
          <span class="center_text">9</span>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById("root")
)
