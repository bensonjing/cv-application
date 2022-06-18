import React from 'react' 

class ExperienceItem extends React.Component {
  render() {
    const {id, handleChange, handleDelete, experienceItem} = this.props 

    return (
      <>
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="position" 
          placeholder="Position" 
          value={experienceItem.position}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="company" 
          placeholder="Company" 
          value={experienceItem.company}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="city" 
          placeholder="City" 
          value={experienceItem.city}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="from" 
          placeholder="From" 
          value={experienceItem.from}
        />
        <input 
          type="text" 
          onChange={(e) => handleChange(id, e)}
          name="to" 
          placeholder="To" 
          value={experienceItem.to}
        />
        <button onClick={(e) => handleDelete(id, e)}>Delete</button>
      </>
    )
  }
}

export default ExperienceItem
