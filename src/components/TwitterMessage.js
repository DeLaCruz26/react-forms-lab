import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputMsg: ''
    };
  }
  
  handleChange = event => {
    this.setState({
      inputMsg: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.inputMsg}/>
        {this.props.maxChars - this.state.inputMsg.length}
      </div>
    );
  }
}

export default TwitterMessage;
