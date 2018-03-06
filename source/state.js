let state = {
  keys: {},
  clicks: {},
  mouse: {},
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

export { state }
