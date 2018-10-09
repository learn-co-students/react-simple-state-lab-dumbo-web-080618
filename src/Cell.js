import React, {Component} from 'react';

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

      </div>
    )
  }

  handleClick = (event) => {
    this.setState({
      color: '#333'
    })
  }

}

export default Cell;
