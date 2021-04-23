import React from 'react'
import Education from './Education'
import PersonalDetails from './PersonalDetails'
import WorkExperience from './WorkExperience'

function FormsContainer(props) {
  return (
    <div className="container__forms">
      <PersonalDetails 
        personalDetails={props.personalDetails}         
        handlePersonalDetailsChange={props.handlePersonalDetailsChange} 
      />
      <WorkExperience 
        workExperience={props.workExperience}
        handleAddWorkExperience={props.handleAddWorkExperience} 
        handleWorkExperienceChange={props.handleWorkExperienceChange}
        handleDeleteWorkExperience={props.handleDeleteWorkExperience}
        handleShowWorkExperience={props.handleShowWorkExperience}
        handleWorkExperienceToPresent={props.handleWorkExperienceToPresent}
      />
      <Education 
        education={props.education}
        handleEducationChange={props.handleEducationChange}
        handleAddEducation={props.handleAddEducation}
        handleDeleteEducation={props.handleDeleteEducation}
        handleShowEducation={props.handleShowEducation}
        handleEducationToPresent={props.handleEducationToPresent}
      />
    </div>
  )
}

export default FormsContainer

