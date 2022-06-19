import React from 'react' 
import Header from './previewComponents/Header'
import Content from './previewComponents/Content'
import Sidebar from './previewComponents/Sidebar'

class Preview extends React.Component {
  render() {
    const cvForm = this.props.cvForm

    return (
      <div className="preview">
        <Header 
          firstName={cvForm.personalInfo.firstName}
          lastName={cvForm.personalInfo.lastName} 
          title={cvForm.personalInfo.title}
        />
        <div className="preview-main">
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
      </div>
    )
  }
}

export default Preview
