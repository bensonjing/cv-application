import React from 'react' 

class Sidebar extends React.Component {
  render() {
    return (
     <div className="preview-sidebar">
        <div className="section-title">Personal Detail</div>
        <div className="sidebar-section">
          <div>Address</div> 
          <div>{this.props.address}</div>
        </div>
        <div className="sidebar-section">
          <div>Phone Number</div>
          <div>{this.props.phoneNumber}</div>
        </div>
        <div className="sidebar-section">
          <div>Email</div> 
          <div>{this.props.email}</div>
        </div>
      </div>
    )
  }
}

export default Sidebar
