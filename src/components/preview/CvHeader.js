import React from 'react'

function CvHeader(props) {
  const {personalDetails} = props;

  let addressLine1, addressLine2 = '';

  if (personalDetails.postalCode) {
    addressLine1 = `${personalDetails.address}, ${personalDetails.postalCode.toUpperCase()}`
  } else {
    addressLine1 = `${personalDetails.address}`
  }

  if (personalDetails.country) {
    addressLine2 = `${personalDetails.city}, ${personalDetails.country}`
  } else {
    addressLine2 = `${personalDetails.city}`
  }

  return (
      <div className="cv__header">
        <div className="cv__name">
          {(personalDetails.firstName ? <h2>{personalDetails.firstName.toUpperCase()}</h2> : <h2>FIRST NAME</h2>)}
          {(personalDetails.lastName? <h2>{personalDetails.lastName.toUpperCase()}</h2> : <h2>LAST NAME</h2>)}
        </div>
        <div className='cv__personal-details'>
          {(personalDetails.jobTitle ? <h3>{personalDetails.jobTitle}</h3> : <h3>Job Title</h3>)}
          {(personalDetails.address ? <p>{addressLine1}</p> : <p>Address Line 1</p>)}
          {(personalDetails.city ? <p>{addressLine2}</p> : <p>Address Line 2</p>)}
          {(personalDetails.email ? <p>{personalDetails.email}</p> : <p>Email</p>)}
          {(personalDetails.phone ? <p>{personalDetails.phone}</p> : <p>Phone Number</p>)}
        </div>
      </div>
  )
}

export default CvHeader