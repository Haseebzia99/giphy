import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const src = "https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
