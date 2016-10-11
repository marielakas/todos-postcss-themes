import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import constants from '../helpers/constants';
import themerStyles from '../themes/themer.css';

export default class Themer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedValue: 'lavender'
      };
      this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    let stylesheet = document.getElementById("main-stylesheet");
    let newPath = `/dist/${value}/styles.css`;

    this.setState({
      selectedValue: value
    });
    stylesheet.href = newPath;
  }

  render() {
    return (
      <div className={themerStyles.themerContainer}>
        <RadioGroup
          name="themes"
          selectedValue={this.state.selectedValue}
          onChange={this.onChange}
        >
          <label>
            <Radio value={constants.cappuccino} />Cappuccino
          </label>
          <label>
            <Radio value={constants.lavender} />Lavender
          </label>
        </RadioGroup>
      </div>
    );
  }
}
