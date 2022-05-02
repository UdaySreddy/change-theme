import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  change = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getClasses = () => {
    const {isClicked} = this.state
    const classObj1 = {class1: 'light1', class2: 'light2', text: 'Dark Mode'}
    const classObj2 = {class1: 'dark1', class2: 'dark2', text: 'Light Mode'}
    return isClicked ? classObj1 : classObj2
  }

  render() {
    const {class1, class2, text} = this.getClasses()

    return (
      <div className={class1}>
        <div className={class2}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.change}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
