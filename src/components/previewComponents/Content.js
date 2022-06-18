import React from 'react' 

class Content extends React.Component {
  render() {
    const experienceItems = this.props.experience.map((item) => (
      <div key={item.id}>
        <div>{item.from} - {item.to}</div>
        <div>{item.position}</div>
        <div>{item.company}, {item.city}</div>
      </div>
    ))

    const educationItems = this.props.education.map((item) => (
      <div key={item.id}>
        <div>{item.from} - {item.to}</div>
        <div>{item.name}, {item.city}</div>
        <div>Degree: {item.degree}</div>
        <div>Subject: {item.subject}</div>
      </div>
    ))

    return (
      <>
        <div>Description</div>
        <div>{this.props.description}</div>
        
        <div>Experience</div>
        {experienceItems}

        <div>Education</div>
        {educationItems}
      </>
    )
  }
}

export default Content
