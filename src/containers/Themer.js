import React, { Component } from 'react';
import RadioButton from '../components/RadioButton';
import themerStyles from '../themes/themer.css';

export default class Themer extends Component {
  render() {
    return (
      <div className={themerStyles.themerContainer}>
        <RadioButton
          label="Capuccino"
        />
        <RadioButton
          label="Lavender"
        />
      </div>
    );
  }
}
