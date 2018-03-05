import React, { Component } from "react"
import { Sprite } from "react-pixi-fiber"

import { Animated } from "./animated"
import { texture } from "./helpers"
import idle from "./images/player-idle.png"

class Player extends Component {
  state = {
    x: undefined,
    y: undefined,
  }

  constructor(...params) {
    super(...params)

    this.state.x = this.props.startX
    this.state.y = this.props.startY
  }

  animate = () => {
    let nextX = this.state.x + 10

    if (nextX > window.innerWidth) {
      nextX = 0
    }

    this.setState({
      x: nextX,
    })
  }

  render() {
    return (
      <Sprite
        texture={texture(idle)}
        x={this.state.x}
        y={this.state.y}
        width={44}
        height={56}
      />
    )
  }
}

const AnimatedPlayer = Animated(Player)

export { Player, AnimatedPlayer }
