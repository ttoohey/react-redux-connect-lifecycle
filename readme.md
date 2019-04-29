# react-redux-connect-lifecycle

A higher-order component to connect a React component to a redux store with component 'mount' lifecycle events.

## Usage

In a container, connect() is used just like connect() from 'react-redux'. The difference is lifecycle events will be added to the component and can be dispatched as actions.

Each lifecycle event has the component's 'props' passed as the only argument.

```js
// MyComponentContainer.js
import connect from 'react-redux-connect-lifecycle'
import MyComponent from './MyComponent'

const mapStateToProps = state => ({
  /* ... */
})

const mapDispatchToProps = ({
  /* ... */
  onComponentWillMount  : (props) => ({ type: 'WILL_MOUNT'  , props }),
  onComponentDidMount   : (props) => ({ type: 'DID_MOUNT'   , props }),
  onComponentDidUpdate  : (props) => ({ type: 'DID_UPDATE'  , props }),
  onComponentWillUnmount: (props) => ({ type: 'WILL_UNMOUNT', props })
})

export default connect(mapStateToProps,mapDispatchToProps)(MyComponent)
```
