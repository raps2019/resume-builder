import React, { Component } from 'react'
import FormsContainer from './forms/FormsContainer'
import PreviewContainer from './preview/PreviewContainer'
import './styles.css'

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       personalDetails: {
         jobTitle: '',
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         country: '',
         city: '',
         address: '',
         postalCode: '',
       },
       workExperience: [],  
       education: [],
      }
    }
  
//Handlers for Personal Details Form

  handlePersonalDetailsChange = (input, event) => {
    const personalDetailsCopy =  this.state.personalDetails;
    personalDetailsCopy[input] = event.target.value
    this.setState({
     personalDetails: personalDetailsCopy,
    }, () => console.log(this.state.personalDetails))
  }

  //Handlers for Work Experience Form

  handleWorkExperienceChange = (input, id, event) => {
    const workExperienceCopy = this.state.workExperience;
    const workExperienceItem = workExperienceCopy.find((item) => item.id === id);
    workExperienceItem[input] = event.target.value;
    this.setState({
      workExperience: workExperienceCopy,
    })
  }

  handleAddWorkExperience = (e) => {
    // const workExperienceCopy = this.state.workExperience;
    // workExperienceCopy.sort((a, b) => (new Date(a.startDate)) - (new Date(b.startDate)))

    this.setState((prevState) => ({
      workExperience: [{
        id: Date.now().toString(),
        show: true,
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        city:'',
        country:'',
        description: '',
      }, ...prevState.workExperience.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))],
    }))
  }

  handleDeleteWorkExperience = (id) => {
    const workExperienceCopy = this.state.workExperience;
    const filteredWorkExperience = workExperienceCopy.filter((item) => item.id !== id);
    this.setState({
      workExperience: filteredWorkExperience,
    })
  }

  handleShowWorkExperience = (id) => {
    const workExperienceCopy = this.state.workExperience;
    const workExperienceItem = workExperienceCopy.find((item) => item.id === id)
    workExperienceItem.show = !workExperienceItem.show
    this.setState({
      workExperience: workExperienceCopy,
    }, () => console.log(this.state.workExperience))
  }

  //Handlers for Eductation Details Form
  handleEducationChange = (input, id, event) => {
    const educationCopy = this.state.education;
    const educationItem = educationCopy.find((item) => item.id === id);
    educationItem[input] = event.target.value;
    this.setState({
      education: educationCopy,
    })
  }

  handleAddEducation = (e) => {
    this.setState((prevState) => ({
      education: [{
        id: Date.now().toString(),
        show: true,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        city:'',
        country:'',
        description: '',
      }, ...prevState.education.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))],
    }))
  }

  handleDeleteEducation = (id) => {
    console.log('handleDeleteEducation')
    const educationCopy = this.state.education;
    const filteredEducation = educationCopy.filter(item => item.id !== id);
    this.setState({
      education: filteredEducation,
    })
  }

  handleShowEducation = (id) => {
    console.log('handleShowEducation')
    const educationCopy = this.state.education;
    const educationItem = educationCopy.find((item) => item.id === id);
    educationItem.show = !educationItem.show
    this.setState({
      education: educationCopy,
    })
  }
  
  render() {
    return (
      <div className="container__main">
        <FormsContainer 
          handlePersonalDetailsChange={this.handlePersonalDetailsChange} 
          personalDetails={this.state.personalDetails}
          workExperience={this.state.workExperience}
          handleAddWorkExperience={this.handleAddWorkExperience}
          handleWorkExperienceChange={this.handleWorkExperienceChange}
          handleDeleteWorkExperience={this.handleDeleteWorkExperience}
          handleShowWorkExperience={this.handleShowWorkExperience}
          education={this.state.education}
          handleEducationChange={this.handleEducationChange}
          handleAddEducation={this.handleAddEducation}
          handleDeleteEducation={this.handleDeleteEducation}
          handleShowEducation={this.handleShowEducation}
        />
        <PreviewContainer 
          personalDetails={this.state.personalDetails}
          workExperience={this.state.workExperience}
          education={this.state.education}
       />
      </div>
    )
  }
}

export default Main
