import React, { Component } from 'react';
import './../Styles/Submit.css'

class Submit extends Component {
    state = {  }
    render() { 
        return (
            <div id="submitBox">
                <br/>

                <h3>Does the customer wear glasses?</h3>
                <input id="q1_yes" name="glasses" type="radio" value="1" onChange={this.props.onChange}/>
                <label htmlFor="q1_yes">Yes</label>
                <br/>
                <input id="q1_no" name="glasses" type="radio" value="0" onChange={this.props.onChange}/>
                <label htmlFor="q1_no">No</label>

                <br/>

                <h3>Is the customer a member?</h3>
                <input id="q2_yes" name="membership" type="radio" value="1" onChange={this.props.onChange}/>
                <label htmlFor="q2_yes">Yes</label>
                <br/>
                <input id="q2_no" name="membership" type="radio" value="0" onChange={this.props.onChange}/>
                <label htmlFor="q2_no">No</label>

                <br/>

                <button class="btn btn-primary" onClick={this.props.onSubmit}>Submit a response</button>

                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Submit;