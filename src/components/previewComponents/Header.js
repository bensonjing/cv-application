import React from 'react' 

class Header extends React.Component {
  render() {
    return (
      <>
        <div>{this.props.firstName} {this.props.lastName}</div>
        <div>{this.props.title}</div>
      </>
    )
  }
}

export default Header
