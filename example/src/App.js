import React, { Component } from 'react'

import ExampleComponent from 'reactland-navigator-utils'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ExampleComponent text='Modern React component module' />
        </div>
        <div>
          <ExampleComponent2 text='Modern React component2 module' />
        </div>
      </div>
    )
  }
}
