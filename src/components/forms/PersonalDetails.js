import React from 'react'

function PersonalDetails(props) {
  return (
    <div className='container__category container__category--personal'>
        <h1 className="heading1">Personal Details</h1>
        <form className="grid grid--form">
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.firstName} 
              onChange={(e) => props.handlePersonalDetailsChange('firstName',e)}
              required>
            </input>
            <label className='input__label'>First Name</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.lastName} 
              onChange={(e) => props.handlePersonalDetailsChange('lastName',e)}
              required>
              </input>
            <label className='input__label'>Last Name</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.personalDetails.jobTitle} 
              onChange={(e) => props.handlePersonalDetailsChange('jobTitle',e)}
              required>
            </input>
            <label className='input__label'>Job Title</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.email} 
              onChange={(e) => props.handlePersonalDetailsChange('email',e)}
              required>
            </input>
            <label className='input__label'>Email</label>
          </div>
          <div className='container__input'>
            <input 
              type='tel' 
              className='input'
              value={props.phone} 
              onChange={(e) => props.handlePersonalDetailsChange('phone',e)}
              required>
            </input>
            <label className='input__label'>Phone</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.country} 
              onChange={(e) => props.handlePersonalDetailsChange('country',e)}
              required>
            </input>
            <label className='input__label'>Country</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.city} 
              onChange={(e) => props.handlePersonalDetailsChange('city',e)}
              required>
            </input>
            <label className='input__label'>City</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.address} 
              onChange={(e) => props.handlePersonalDetailsChange('address',e)}
              required>
            </input>
            <label className='input__label'>Address</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={props.postalCode} 
              onChange={(e) => props.handlePersonalDetailsChange('postalCode',e)}
              required>
            </input>
            <label className='input__label'>Postal Code</label>
          </div>
        </form>
      </div>
  )
}

export default PersonalDetails




