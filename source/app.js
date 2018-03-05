import React from "react"
import { render } from "react-dom"
import { Stage, Text } from "react-pixi-fiber"

const Game = props => {
  return (
    <Stage
      width={props.w}
      height={props.h}
      options={{ backgroundColor: 0x8bfa9f }}
    >
      <Text
        text="hello world"
        x={props.x}
        y={props.y}
        style={{ fill: 0x000000 }}
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
