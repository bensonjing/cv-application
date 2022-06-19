import React from 'react' 

class Content extends React.Component {
  render() {
    const experienceItems = this.props.experience.map((item) => (
      <div className="experience" key={item.id}>
        <div className="experience-left">{item.from} - {item.to}</div>
        <div>
          <div>{item.position}</div>
          <div>{item.company}, {item.city}</div>
        </div>
      </div>
    ))

    const educationItems = this.props.education.map((item) => (
      <div className="education" key={item.id}>
        <div className="education-left">{item.from} - {item.to}</div>
        <div>
          <div>{item.name}, {item.city}</div>
          <div>Degree: {item.degree}</div>
          <div>Subject: {item.subject}</div>
      </div>
      </div>
    ))

    return (
      <div className="preview-content">
        <div className="preview-section">
          <div className="section-title">Description</div>
          <div className="description">{this.props.description}</div>
        </div>
        
        <div className="preview-section">
          <div className="section-title">Experience</div>
          {experienceItems}
        </div>

        <div className="preview-section">
          <div className="section-title">Education</div>
          {educationItems}
        </div>
      </div>
    )
  }
}

export default Content
