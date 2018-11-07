import React, { Component } from 'react';
import './App.css';

import Result from './Components/Result.js'
import Submit from './Components/Submit.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: "",
      membership: "",
      correlation: 0,

      records: {
        glasses: [],
        membership: [],
      }
    };
  }

  handleValueChange = e => {
    const {name, value} = e.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  submitAResponse = () => {
    
    this.state.records.glasses.push (this.state.glasses);
    this.state.records.membership.push (this.state.membership);
    alert ("Submission successful!");

    var total = Math.min(this.state.records.glasses.length, this.state.records.membership.length);
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_x2 = 0;
    var sum_y2 = 0;
    
    for (var i = 0; i < total; i ++) {
      sum_x += this.state.records.glasses[i];
      sum_y += this.state.records.membership[i];
      sum_xy += this.state.records.glasses[i] * this.state.records.membership[i];
      sum_x2 += this.state.records.glasses[i] * this.state.records.glasses[i];
      sum_y2 += this.state.records.membership[i] * this.state.records.membership[i];
    }

    var step1 = (total * sum_xy) - (sum_x * sum_y);
    var step2 = (total * sum_x2) - (sum_x * sum_x);
    var step3 = (total * sum_y2) - (sum_y * sum_y);
    var step4 = Math.sqrt(step2 * step3);
    var pearsons_result = step1 / step4;

    this.setState({
      correlation: pearsons_result
    });
    
  }

  render() {
    return (
      <div className="App">
        <Submit onChange={this.handleValueChange} onSubmit={this.submitAResponse} />
        <Result updateResult={this.state.correlation} />
      </div>
    );
  }
}

export default App;
