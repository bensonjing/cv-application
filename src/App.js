import React from 'react' 
import uniqid from 'uniqid'
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

  handleChangeExperience = (id, e) => {
    this.setState(prevState => {
      const newExperience = prevState.experience.map((item) => {
        if (item.id === id) {
          return {...item, [e.target.name]: e.target.value}
        }
        return item
      })
      return {...prevState, experience: [...newExperience]}
    })
  }

  experienceDelete = (id, e) => {
    this.setState(prevState => {
      const newExperience = prevState.experience.filter((item) => {
        return item.id !== id
      })
      return { ...prevState, experience: [...newExperience] }
    })
  }

  experienceAdd = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      ...prevState, 
      experience: [
        ...prevState.experience, 
        {
          id: uniqid(),
          position: '', 
          company: '', 
          city: '', 
          from: '', 
          to: '', 
        },
      ],
    }))
  }

  handleChangeEducation = (id, e) => {
    this.setState(prevState => {
      const newEducation = prevState.education.map((item) => {
        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value }
        }
        return item
      })
      return { ...prevState, education:[ ...newEducation ]}
    })
  }

  educationDelete = (id, e) => {
    this.setState(prevState => {
      const newEducation = prevState.education.filter((item) => {
        return item.id !== id
      })
      return { ...prevState, education:[ ...newEducation ]}
    })
  }

  educationAdd = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      ...prevState, 
      education: [
        ...prevState.education, 
        {
          id: uniqid(), 
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
          handleChangeExperience={this.handleChangeExperience}
          experienceDelete={this.experienceDelete}
          experienceAdd={this.experienceAdd}
          handleChangeEducation={this.handleChangeEducation}
          educationDelete={this.educationDelete}
          educationAdd={this.educationAdd}
          reset={this.reset}
        />
        <Preview />
      </>
    )
  }
}

export default App
