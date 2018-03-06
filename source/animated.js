import React, { Component } from "react"

const Animated = Composed => {
  return class extends Component {
    componentDidMount() {
      this.loop()
    }

    componentWillUnmount() {
      cancelAnimationFrame(this.timer)
    }

    loop = () => {
      this.timer = requestAnimationFrame(this.loop)
      this.decorated.animate(this.props.state)
    }

    render() {
      return (
        <Composed
          ref={ref => {
            this.decorated = ref
          }}
          {...this.props}
        />
      )
    }
  }
}

export { Animated }
