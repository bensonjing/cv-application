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
        <Education 
          education={this.props.cvForm.education} 
          handleChange={this.props.handleChangeEducation}
          handleDelete={this.props.educationDelete}
          handleClick={this.props.educationAdd}
        />
        <div id="reset">
          <button onClick={this.props.reset}>Reset</button>
        </div>
      </form>
    )
  }
}

export default CVForm
