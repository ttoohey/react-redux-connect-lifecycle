import React from 'react'
import { connect } from 'react-redux'

export default (...connectArgs) => (Component) => connect(...connectArgs)(
  class extends React.Component {
    componentWillMount () {
      this.trigger('onComponentWillMount')
    }
    componentDidMount () {
      this.trigger('onComponentDidMount')
    }
    componentWillUnmount () {
      this.trigger('onComponentWillUnmount')
    }
    componentDidUpdate () {
      this.trigger('onComponentDidUpdate')
    }
    trigger (name) {
      this.props.hasOwnProperty(name) && this.props[name](this.props)
    }
    render () {
      return <Component {...this.props} />
    }
  }
)
