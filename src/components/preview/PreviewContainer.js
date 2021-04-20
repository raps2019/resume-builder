import React from 'react'
import '../styles.css'
import CvEducation from './CvEducation'
import CvHeader from './CvHeader'
import CvWorkExperience from './CvWorkExperience'

function PreviewContainer(props) {
  
  
  return (
    <div className="cv__page">
      <CvHeader personalDetails={props.personalDetails} />
      <CvWorkExperience workExperience={props.workExperience} />
      <CvEducation education={props.education} />
    </div>
  )
}

export default PreviewContainer;
