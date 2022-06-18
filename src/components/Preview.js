import React from 'react' 
import Header from './previewComponents/Header'
import Content from './previewComponents/Content'
import Sidebar from './previewComponents/Sidebar'

class Preview extends React.Component {
  render() {
    const cvForm = this.props.cvForm

    return (
      <div>
        <Header 
          firstName={cvForm.personalInfo.firstName}
          lastName={cvForm.personalInfo.lastName} 
          title={cvForm.personalInfo.title}
        />
        <Content 
          description={cvForm.personalInfo.description}
          experience={cvForm.experience} 
          education={cvForm.education}
        /> 
        <Sidebar 
          address={cvForm.personalInfo.address} 
          phoneNumber={cvForm.personalInfo.phoneNumber} 
          email={cvForm.personalInfo.email}
        />
      </div>
    )
  }
}

export default Preview
