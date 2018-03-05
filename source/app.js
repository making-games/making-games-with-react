import React, { Component } from "react"
import { render } from "react-dom"
import { Stage } from "react-pixi-fiber"

import { AnimatedPlayer } from "./player"

const Game = props => {
  return (
    <Stage
      width={props.w}
      height={props.h}
      options={{ backgroundColor: 0x8bfa9f }}
    >
      <AnimatedPlayer
        startX={props.w / 2}
        startY={props.h / 2}
      />
    </Stage>
  )
}

render(
  <Game
    w={window.innerWidth}
    h={window.innerHeight}
    x={50}
    y={50}
  />,
  document.querySelector(".app"),
)
