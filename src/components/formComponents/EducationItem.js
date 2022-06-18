import React from 'react' 

class EducationItem extends React.Component {
  render() {
    const {id, handleChange, handleDelete, educationItem} = this.props

    return (
      <>
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="name" 
          placeholder="Name"
          value={educationItem.name}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="city" 
          placeholder="City"
          value={educationItem.city}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="degree" 
          placeholder="Degree"
          value={educationItem.degree}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="subject" 
          placeholder="Subject"
          value={educationItem.subject}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="from" 
          placeholder="From"
          value={educationItem.from}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="to" 
          placeholder="To"
          value={educationItem.to}
        />
        <button onClick={(e) => handleDelete(id, e)}>Delete</button>
      </>
    )
  }
}

export default EducationItem
