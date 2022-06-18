import React from 'react' 
import PersonalInfo from './formComponents/PersonalInfo'
import Experience from './formComponents/Experience'
import Education from './formComponents/Education'

class CVForm extends React.Component {
  render() {
    return (
      <form>
        <PersonalInfo 
          personalInfo={this.props.cvForm.personalInfo}
          handleChange={this.props.handleChangePersonal}
        />
        <Experience /> 
        <button onClick={this.props.experienceAdd}>Add</button>
        <Education />
        <button onClick={this.props.educationAdd}>Add</button>
        <button onClick={this.props.reset}>Reset</button>
      </form>
    )
  }
}

export default CVForm
