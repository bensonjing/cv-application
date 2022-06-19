import React from 'react' 

class PersonalInfo extends React.Component {
  render() {
    const { personalInfo, handleChange } = this.props

    return (
      <div className="subForm">
        <div className="formTitle">Personal Information</div>
        <input 
          type="text" 
          onChange={handleChange} 
          name="firstName"
          placeholder="First name"
          value={personalInfo.firstName}
        />
        <input 
          type="text" 
          onChange={handleChange} 
          name="lastName"
          placeholder="Last name"
          value={personalInfo.lastName}
        />
        <input 
          type="text" 
          onChange={handleChange} 
          name="title"
          placeholder="title"
          value={personalInfo.title}
        />
        <input 
          type="text" 
          onChange={handleChange} 
          name="address"
          placeholder="address"
          value={personalInfo.address}
        />
        <input 
          type="tel" 
          onChange={handleChange} 
          name="phoneNumber"
          placeholder="Phone number"
          value={personalInfo.phoneNumber}
        />
        <input 
          type="email" 
          onChange={handleChange} 
          name="email"
          placeholder="Email"
          value={personalInfo.email}
        />
        <textarea 
          type="text" 
          onChange={handleChange} 
          name="description"
          placeholder="Description"
          value={personalInfo.description}
          rol="4" col="30"
        />
      </div>
    )
  }
}

export default PersonalInfo
