import React from 'react' 
import Header from './previewComponents/Header'
import Content from './previewComponents/Content'
import Sidebar from './previewComponents/Sidebar'

class Preview extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content /> 
        <Sidebar />
      </div>
    )
  }
}

export default Preview
