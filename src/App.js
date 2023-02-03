import React, { Component } from 'react'
import { Menu } from './Components/Menu'
import { Header } from './Components/Header'
import { Intro } from './Components/Intro'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Intro />
      </div>
    )
  }
}
