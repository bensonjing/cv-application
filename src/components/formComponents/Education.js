import React from 'react' 

class Education extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Education</legend>
        <button onClick={this.props.handleClick}>Add</button>
      </fieldset>
    )
  }
}

export default Education
