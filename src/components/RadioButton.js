import React, { Component } from 'react';
import radioButtonStyles from '../themes/radioButton.css';

export default class Switch extends Component {
  render() {
    return (
      <div className={radioButtonStyles.radioButtonContainer}>
        <span className={`${radioButtonStyles.radioButton} ${radioButtonStyles.on}`}></span>
        <span className={radioButtonStyles.radioButtonLabel}>{this.props.label}</span>
      </div>
    );
  }
}
