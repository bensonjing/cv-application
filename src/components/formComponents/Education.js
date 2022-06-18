import React from 'react' 
import EducationItem from './EducationItem'

class Education extends React.Component {
  render() {
    const educationItems = this.props.education.map((item) => (
      <EducationItem
        key={item.id}
        id={item.id} 
        handleChange={this.props.handleChange}
        handleDelete={this.props.handleDelete}
        educationItem={item}
      />
    ))

    return (
      <fieldset>
        <legend>Education</legend>
        {educationItems}
        <button onClick={this.props.handleClick}>Add</button>
      </fieldset>
    )
  }
}

export default Education
