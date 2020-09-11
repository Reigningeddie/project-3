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
      <div className="dashboard">
          <div className="header">
        <h1>You Get To Draw: _________________</h1>
        <h5>Score: ____</h5>
      </div>
      <br></br>
      <div className="artboard">
        <div className="picker">
        <BlockPicker
          color={this.state.colorSelected}
          onChangeComplete={this.handleChangeComplete}
          padding={50}
          colors= {['#fc0303', '#fc8403', '#fce703', '#02d12b', '#02cad1', '#0258d1', '#9302d1', '#d102ae65', '#000000', '#753a02']}
        />
        </div>
        <div className="canvas">
        <CanvasDraw
          brushColor={this.state.colorSelected}
          canvasWidth={550}
          canvasHeight={550}
          onChange={() => console.log("onChange")}
          lazyRadius= {0}
          brushRadius= {7}
          //hideGrid={"false"}
        />
        <button class="btn btn-primary">Clear</button>
        <button class="btn btn-success">Submit</button>
        </div>
        </div>
        </div>
    );
  }
};
