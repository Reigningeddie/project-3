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
      <div className="artboard">
          <div className="header">
        <h1>This is Where You Draw!</h1>
      </div>
        <div className="picker">
        <BlockPicker
          color={this.state.colorSelected}
          onChangeComplete={this.handleChangeComplete}
          padding={50}
        />
        </div>
        <div className="canvas">
        <CanvasDraw
          brushColor={this.state.colorSelected}
          canvasWidth={1000}
          onChange={() => console.log("onChange")}
          lazyRadius= {0}
          brushRadius= {7}
          //hideGrid={"false"}
        />
        </div>
        </div>
    );
  }
};
