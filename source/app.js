import React, { Component } from "react"
import { render } from "react-dom"
import { Stage } from "react-pixi-fiber"

import { AnimatedBox } from "./components/box"
import { AnimatedPlayer } from "./components/player"
import { state, calculate } from "./state"

class Game extends Component {
  componentDidMount() {
    this.timer = calculate()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { width, height } = this.props

    return (
      <Stage
        width={width}
        height={height}
        options={{ backgroundColor: 0x8bfa9f }}
      >
        <AnimatedBox
          startX={width / 2 - 200}
          startY={height / 2 - 24}
          state={state}
          ref={box => {
            state.boxes.left = box
          }}
        />
        <AnimatedPlayer
          startX={width / 2}
          startY={height / 2}
          state={state}
          ref={player => {
            state.player = player
          }}
        />
        <AnimatedBox
          startX={width / 2 + 200}
          startY={height / 2 + 24}
          state={state}
          ref={box => {
            state.boxes.right = box
          }}
        />
      </Stage>
    )
  }
}

render(
  <Game
    width={window.innerWidth}
    height={window.innerHeight}
    x={50}
    y={50}
  />,
  document.querySelector(".app"),
)
