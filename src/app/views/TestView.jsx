import '../../assets/css/errorStyle.scss'
import React, { Component } from 'react';

class TestView extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="background-error">
        <div className="layer-top">
          testing
        </div>
      </div>
    )
  }
}

export default TestView;