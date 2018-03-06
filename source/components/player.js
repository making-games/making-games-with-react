import React, { Component } from "react"
import { Sprite } from "react-pixi-fiber"

import { Animated } from "./animated"
import { texture } from "./helpers"
import idle from "../images/player-idle.png"

class Player extends Component {
  state = {
    x: undefined,
    y: undefined,
    width: 44,
    height: 56,
    velocityX: 0,
    velocityY: 0,
  }

  constructor(...params) {
    super(...params)

    this.state.x = this.props.startX
    this.state.y = this.props.startY

    this.maximumVelocityX = 8
    this.accelerationX = 2
    this.frictionX = 0.9
  }

  calculateState = (globalState, localState) => {
    let state = localState || this.state

    if (
      globalState.keys[65] &&
      globalState.collisions.left.length
    ) {
      return {
        ...state,
        velocityX: 0,
      }
    }

    if (
      globalState.keys[68] &&
      globalState.collisions.right.length
    ) {
      return {
        ...state,
        velocityX: 0,
      }
    }

    let velocityX = state.velocityX

    if (globalState.keys[65]) {
      velocityX = Math.max(
        velocityX - this.accelerationX,
        this.maximumVelocityX * -1,
      )
    }

    if (globalState.keys[68]) {
      velocityX = Math.min(
        velocityX + this.accelerationX,
        this.maximumVelocityX,
      )
    }

    velocityX *= this.frictionX

    return {
      x: state.x + velocityX,
      y: state.y,
      width: 44,
      height: 56,
      velocityX,
      velocityY: 0,
    }
  }

  animate = globalState => {
    const newState = this.calculateState(
      globalState,
      this.state,
    )

    if (
      (newState.velocityX < 0 || globalState.keys[65]) &&
      globalState.collisions.left.length === 0
    ) {
      this.setState(newState)
    } else if (
      (newState.velocityX > 0 || globalState.keys[68]) &&
      globalState.collisions.right.length === 0
    ) {
      this.setState(newState)
    } else {
      this.setState({
        velocityX: 0,
      })
    }
  }

  render() {
    const { x, y, width, height } = this.state

    return (
      <Sprite
        texture={texture(idle)}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    )
  }
}

const AnimatedPlayer = Animated(Player)

export { Player, AnimatedPlayer }
