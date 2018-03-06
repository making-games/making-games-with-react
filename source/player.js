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

  velocityX = 0
  maximumVelocityX = 8
  accelerationX = 2
  frictionX = 0.9

  animate = state => {
    // let nextX = this.state.x + 10

    // if (nextX > window.innerWidth) {
    //   nextX = 0
    // }

    // this.setState({
    //   x: nextX,
    // })

    if (state.keys[65]) {
      this.velocityX = Math.max(
        this.velocityX - this.accelerationX,
        this.maximumVelocityX * -1,
      )
    }

    if (state.keys[68]) {
      this.velocityX = Math.min(
        this.velocityX + this.accelerationX,
        this.maximumVelocityX,
      )
    }

    this.velocityX *= this.frictionX

    this.setState(state => ({
      x: state.x + this.velocityX,
    }))
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
