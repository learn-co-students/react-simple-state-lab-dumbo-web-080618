import React, { Component } from 'react';
import {pattern1, pattern2} from './data'
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, index) => <Cell value={val} key={index} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div className="row" key={index}>{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: pattern2
}
