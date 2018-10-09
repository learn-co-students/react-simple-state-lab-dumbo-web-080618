import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    }
  }

  render(){
    return (
      <div className='cell' onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  handleClick = (event) => {  //call arrow function
    this.setState({color:'#333'})
  }
}
