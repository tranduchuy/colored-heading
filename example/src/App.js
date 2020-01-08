import React, {Component} from 'react'

import ColoredHeadingOne from 'colored-heading'

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne text='Modern React component module'
                           color={"red"}/>
      </div>
    )
  }
}
