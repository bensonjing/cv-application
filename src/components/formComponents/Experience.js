import React from 'react' 
import ExperienceItem from './ExperienceItem'

class Experience extends React.Component {
  render() {
    const experienceItems = this.props.experience.map((experienceItem) => (
      <ExperienceItem 
        key={experienceItem.id}
        id={experienceItem.id}
        handleChange={this.props.handleChange}
        handleDelete={this.props.handleDelete}
        experienceItem={experienceItem}
      />
    ))

    return (
      <div className="subForm">
        <div className="formTitle">Experience</div>
        {experienceItems}
        <button onClick={this.props.handleClick}>Add</button>
      </div>
    )
  }
}

export default Experience
