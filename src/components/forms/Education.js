import React from 'react'

function Education(props) {

const {
  education,
  handleEducationChange,
  handleAddEducation,
  handleDeleteEducation,
  handleShowEducation,  
} = props

const educationList = education.map((item) => 

item.show === true ?  
  (<div key={item.id} className='container__form container__form--category'>
    <div className='grid grid--category-heading grid--category-heading--maximized'>
      <h2 className='heading2'>{item.school && item.degree ? `${item.degree} at ${item.school}` : `Enter Education Details`} </h2>
      <button className='button button__hide-details' onClick={()=>{handleShowEducation(item.id)}}>Hide Details</button>
    </div>
    <div className='grid grid--form'> 
      <div className='container__input'>
        <input
          type='text'
          className='input'
          value={item.school}
          onChange={(e) => handleEducationChange('school', item.id, e)}
          required>
        </input>
        <label className='input__label'>School</label>
      </div>
      <div className='container__input'>
        <input
          type='text'
          className='input'
          value={item.degree}
          onChange={(e) => handleEducationChange('degree', item.id, e)}
          required>
        </input>
        <label className='input__label'>Degree</label>
      </div>
      <div className='container__input'>
        <input
          type='date'
          className='input'
          value={item.startDate}
          onChange={(e) => handleEducationChange('startDate', item.id, e)}
          required>
        </input>
        <label className='input__label'>Start Date</label>
      </div>
      <div className='container__input'>
        <input
          type='date'
          value={item.endDate}
          className='input'
          onChange={(e) => handleEducationChange('endDate', item.id, e)}
          required>
        </input>
        <label className='input__label'>End Date</label>
      </div>
      <div className='container__input'>
        <input
          type='text'
          className='input'
          value={item.city}
          onChange={(e) => handleEducationChange('city', item.id, e)}
          required>
        </input>
        <label className='input__label'>City</label>
      </div>
      <div className='container__input'>
        <input
          type='text'
          className='input'
          value={item.country}
          onChange={(e) => handleEducationChange('country', item.id, e)}
          required>
        </input>
        <label className='input__label'>Country</label>
      </div>
      <div className='container__input container__input--textarea'>
        <textarea
          type='text'
          className='input input--textarea'
          value={item.description}
          onChange={(e) => handleEducationChange('description', item.id, e)}
          required>
        </textarea>
        <label className='input__label input__label--textarea'>Description</label>
      </div>
      <button className='button button--delete' onClick={() => handleDeleteEducation(item.id)}>Delete</button>
    </div>
  </div>) :
   (<div key={item.id} className='container__form container__form--category'>
      <div className='grid grid--category-heading grid--category-heading--minimized'>
        <h2 className='heading2'>{item.school && item.degree ? `${item.degree} at ${item.school}` : `Enter Education Details`} </h2>
        <button className='button button__show-details' onClick={()=>{handleShowEducation(item.id)}}>Show Details</button>
      </div>
    </div>)
  )

  return (
    <div className='container__category container__category--education'>
      <h1 className="heading1">Education</h1>
        <div className="container__button">
          <button onClick={handleAddEducation} className="button button--add">Add Education</button>
        </div>
        <div>
          {educationList}
        </div>
    </div>
  )
}

export default Education;
