import React, { Component } from "react";
import "./Draw.css";
import CanvasDraw from "react-canvas-draw";
import { BlockPicker } from 'react-color';


export default class Draw extends Component {
  state = {
    colorSelected: "#000000"
  };


  handleChangeComplete = (color) => {
    this.setState({ colorSelected: color.hex });
  };

  render() {
    return (
      <div>
        <BlockPicker
          color={this.state.colorSelected}
          onChangeComplete={this.handleChangeComplete}
        />
        <CanvasDraw
          brushColor={this.state.colorSelected}
          canvasWidth={1000}
          onChange={() => console.log("onChange")}
          lazyRadius= {0}
          brushRadius= {7}
        />

      </div>
    );
  }
};
