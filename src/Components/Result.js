import React, { Component } from 'react';
import './../Styles/Result.css'

class Result extends Component {
    state = {  }
    render() { 
        return (
            <div id="resultBox">
                <br/>
                <h2>The correlation coefficient is {this.props.updateResult}.</h2>
                <br/>
            </div>
        );
    }
}
 
export default Result;