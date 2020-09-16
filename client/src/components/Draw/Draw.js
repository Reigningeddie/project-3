import React, { Component } from "react";
import "./Draw.css";
import Canvas from "../Canvas";
import { BlockPicker } from 'react-color';
import Word from '../RandomWord/randomWord';


export default class Draw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: "#000000"
    };
  }

  handleChangeComplete = (color) => {
    this.setState({ colorSelected: color.hex });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="header">
          <h1>You Get To Draw: <Word /></h1>
          <h5>Score: ____</h5>
        </div>
        <br></br>
        <div className="artboard">
          <div className="picker">
            <BlockPicker
              color={this.state.colorSelected}
              onChangeComplete={this.handleChangeComplete}
              padding={50}
              colors={['#fc0303', '#fc8403', '#fce703', '#02d12b', '#02cad1', '#0258d1', '#9302d1', '#FA6BED', '#000000', '#753a02']}
            />
          </div>
          <div className="canvas">
            <Canvas
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor={this.state.colorSelected}
              canvasWidth={this.props.widthValue}
              canvasHeight={this.props.widthValue}
              canvasContext={this.props.contextValue}
              setContext={this.props.changeContext}
              setWidth={this.props.changeWidth}
              setHeight={this.props.changeHeight}
              onChange={() => console.log("onChange")}
              lazyRadius={0}
              brushRadius={7}
            />
            <button className="btn btn-primary" onClick={() => {
              this.saveableCanvas.clear();
            }}>Clear</button>
            <button className="btn btn-success" onClick={() => {
              this.saveableCanvas.undo();
            }}>Undo</button>
          </div>
        </div>
      </div>
    );
  }
};

