import React, { Component } from 'react';
import dark from '../styles/dark.css';

export default class Test extends Component {
  render() {
    console.log(dark.test);
    return <div className={dark.test}>Text</div>
  }
}
