// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Count is Even'
    } else {
      text = 'Count is Odd'
    }
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">{text}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="bottom-description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
