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
        <h1>You Get To Draw: </h1>
        <h5>Score:</h5>
      </div>
      <br></br>
      <div className="artboard">
        <div className="picker">
        <BlockPicker
          color={this.state.colorSelected}
          onChangeComplete={this.handleChangeComplete}
          padding={50}
          colors= {['#fc0303', '#fc8403', '#fce703', '#02d12b', '#02cad1', '#0258d1', '#9302d1', '#FA6BED', '#000000', '#753a02']}
        />
        </div>
        <div className="canvas">
        <CanvasDraw
        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.colorSelected}
          canvasWidth={450}
          canvasHeight={450}
          onChange={() => console.log("onChange")}
          lazyRadius= {0}
          brushRadius= {7}
          //hideGrid={"false"}
        />
       
        </div>
        </div>
        </div>
    );
  }
};

