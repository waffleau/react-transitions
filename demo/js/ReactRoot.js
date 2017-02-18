import React, {Component} from 'react'

import ExampleFade from './ExampleFade'
import ExampleRotate from './ExampleRotate'
import ExampleScale from './ExampleScale'
import ExampleSkew from './ExampleSkew'
import ExampleSlide from './ExampleSlide'

export default class ReactRoot extends Component {
  render() {
    return (
      <div className="container">
        <div style={styles.example}>
          <ExampleFade />
        </div>
        <div style={styles.example}>
          <ExampleRotate />
        </div>
        <div style={styles.example}>
          <ExampleScale />
        </div>
        <div style={styles.example}>
          <ExampleSkew />
        </div>
        <div style={styles.example}>
          <ExampleSlide />
        </div>
      </div>
    )
  }
}

const styles = {
  example: {
    marginBottom: 60
  }
}
