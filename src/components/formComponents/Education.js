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
      <div className="subForm">
        <div className="formTitle">Education</div>
        {educationItems}
        <button onClick={this.props.handleClick}>Add</button>
      </div>
    )
  }
}

export default Education
