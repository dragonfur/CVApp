import React, { Component } from 'react'
import Body from './components/Body';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

export default App;
