import React, { Component } from "react"
import { Sprite } from "react-pixi-fiber"

import { Animated } from "./animated"
import { texture } from "./helpers"
import box from "../images/box.png"

class Box extends Component {
  state = {
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
  }

  constructor(...params) {
    super(...params)

    this.state.x = this.props.startX
    this.state.y = this.props.startY
  }

  calculateState = (globalState, localState) => {
    const state = localState || this.state

    return {
      x: state.x,
      y: state.y,
      width: 48,
      height: 48,
    }
  }

  animate = globalState => {
    this.setState(localState =>
      this.calculateState(globalState, localState),
    )
  }

  render() {
    const { x, y, width, height } = this.state

    return (
      <Sprite
        texture={texture(box)}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    )
  }
}

const AnimatedBox = Animated(Box)

export { Box, AnimatedBox }
