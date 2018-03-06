let state = {
  keys: {},
  clicks: {},
  mouse: {},
  boxes: {
    left: undefined,
    right: undefined,
  },
  player: undefined,
  collisions: {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
}

const calculate = () => {
  return setInterval(() => {
    const player = state.player.core.calculateState(state)

    state.collisions.left = []
    state.collisions.right = []

    Object.values(state.boxes).forEach(next => {
      const box = next.core.calculateState(state)

      const playerMiddleX = player.width / 2 + player.x
      const playerMiddleY = player.height / 2 + player.y
      const boxMiddleX = box.width / 2 + box.x
      const boxMiddleY = box.height / 2 + box.y

      // const deltaX = playerMiddleX - boxMiddleX
      // const deltaY = playerMiddleY - boxMiddleY

      // const distance = Math.sqrt(
      //   deltaX * deltaX + deltaY * deltaY,
      // )

      // const radiusDistance =
      //   player.width / 2 + box.width / 2

      // if (distance <= radiusDistance) {
      //   if (
      //     player.velocityX <= 0 &&
      //     playerMiddleX >= boxMiddleX
      //   ) {
      //     state.collisions.left.push(box)
      //   }

      //   if (
      //     player.velocityX >= 0 &&
      //     playerMiddleX <= boxMiddleX
      //   ) {
      //     state.collisions.right.push(box)
      //   }
      // }

      const boxTop = box.y
      const boxRight = box.x + box.width
      const boxBottom = box.y + box.height
      const boxLeft = box.x

      const playerTop = player.y
      const playerRight = player.x + player.width
      const playerBottom = player.y + player.height
      const playerLeft = player.x

      const tolerance = 8

      if (
        playerLeft < boxRight + tolerance &&
        playerRight > boxLeft - tolerance &&
        playerTop < boxBottom + tolerance &&
        playerBottom > boxTop - tolerance
      ) {
        if (
          player.velocityX <= 0 &&
          playerMiddleX >= boxMiddleX
        ) {
          state.collisions.left.push(box)
        }

        if (
          player.velocityX >= 0 &&
          playerMiddleX <= boxMiddleX
        ) {
          state.collisions.right.push(box)
        }
      }
    })
  }, 1000 / 120)
}

document.body.addEventListener("keydown", e => {
  state.keys[e.which] = true
  e.preventDefault()
})

document.body.addEventListener("keyup", e => {
  state.keys[e.which] = false
  e.preventDefault()
})

document.body.addEventListener("mousedown", e => {
  state.clicks[e.which] = true
  e.preventDefault()
})

document.body.addEventListener("mouseup", e => {
  state.clicks[e.which] = false
  e.preventDefault()
})

document.body.addEventListener("contextmenu", e => {
  e.preventDefault()
})

document.body.addEventListener("mousemove", e => {
  state.mouse = {
    x: e.clientX,
    y: e.clientY,
  }

  e.preventDefault()
})

export { state, calculate }
