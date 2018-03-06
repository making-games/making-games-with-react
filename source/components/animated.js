import React, { Component } from "react"

const Animated = Composed => {
  return class extends Component {
    get core() {
      if (typeof this.decorated.core !== "undefined") {
        return this.decorated.core
      }

      return this.decorated
    }

    componentDidMount() {
      this.loop()
    }

    componentWillUnmount() {
      cancelAnimationFrame(this.timer)
    }

    loop = () => {
      this.timer = requestAnimationFrame(this.loop)
      this.core.animate(this.props.state)
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
