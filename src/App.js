import React from 'react' 
import Header from './components/Header'
import CVForm from './components/CVForm'
import Preview from './components/Preview'
import initCVFrom from './modules/initCVForm'

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = initCVFrom
  }

  handleChangePersonal = (e) => {
    this.setState(prevState => ({
      ...prevState, 
      personalInfo: {
        ...prevState.personalInfo, 
        [e.target.name]: e.target.value,
      },
    }))
  }

  experienceAdd = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      ...prevState, 
      experience: [
        ...prevState.experience, 
        {
          position: '', 
          company: '', 
          city: '', 
          from: '', 
          to: '', 
        },
      ],
    }))
  }

  educationAdd = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      ...prevState, 
      education: [
        ...prevState.education, 
        {
          name: '', 
          city: '', 
          degree: '', 
          subject: '',
          from: '', 
          to: '', 
        },
      ],
    }))
  }

  reset = (e) => {
    e.preventDefault() 
    this.setState(initCVFrom)
  }

  render() {
    return (
      <>
        <Header />
        <CVForm 
          cvForm={this.state} 
          handleChangePersonal={this.handleChangePersonal}
          experienceAdd={this.experienceAdd}
          educationAdd={this.educationAdd}
          reset={this.reset}
        />
        <Preview />
      </>
    )
  }
}

export default App
