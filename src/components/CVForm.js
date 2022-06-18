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
        <Experience 
          experience={this.props.cvForm.experience}
          handleChange={this.props.handleChangeExperience}
          handleDelete={this.props.experienceDelete}
          handleClick={this.props.experienceAdd}
        /> 
        <Education handleClick={this.props.educationAdd}/>
        <button onClick={this.props.reset}>Reset</button>
      </form>
    )
  }
}

export default CVForm
