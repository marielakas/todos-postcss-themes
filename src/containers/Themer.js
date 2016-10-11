import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import themerStyles from '../themes/themer.css';

export default class Themer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedValue: 'lavender'
      };
      this.onChange = this.onChange.bind(this);
  }

  onChange(value, event) {
    this.setState({
      selectedValue: value
    });
    var stylesheet = document.getElementById("main-stylesheet");
    var newPath = `/dist/${value}/styles.css`;
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
            <Radio value="cappuccino" />Cappuccino
          </label>
          <label>
            <Radio value="lavender" />Lavender
          </label>
        </RadioGroup>
      </div>
    );
  }
}
