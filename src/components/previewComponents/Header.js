import React from 'react' 

class Header extends React.Component {
  render() {
    return (
      <div className="preview-header">
        <div className="title">{this.props.firstName} {this.props.lastName}</div>
        <div className="subtitle">{this.props.title}</div>
      </div>
    )
  }
}

export default Header
