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
        <Content /> 
        <Sidebar />
      </div>
    )
  }
}

export default Preview
