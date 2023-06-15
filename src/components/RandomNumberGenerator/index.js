// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const getRandom = Math.ceil(Math.random() * 100)
    this.setState({count: getRandom})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="randomCounter">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btn">
            <button
              className="randomBtn"
              onClick={this.onGenerate}
              type="button"
            >
              Generate
            </button>
          </div>
          <div className="">
            <p className="lastLine">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
