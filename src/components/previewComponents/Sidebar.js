import React from 'react' 

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div>Personal Detail</div>
        <div>Address</div> 
        <div>{this.props.address}</div>
        <div>Phone Number</div>
        <div>{this.props.phoneNumber}</div>
        <div>Email</div> 
        <div>{this.props.email}</div>
      </>
    )
  }
}

export default Sidebar
