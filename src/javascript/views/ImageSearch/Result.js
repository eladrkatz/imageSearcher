import React, { Component, PropTypes } from 'react';

export default class ImageResult extends Component {

  getStyles() {
    return {};
  }

  render() {
    const { result } = this.props;

    return (
      <div>
        Image result {result.index} <br />
        Name: {result.imageName}
      </div>
    );
  }
}
