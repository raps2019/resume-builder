import React from 'react'

function CvWorkExperience(props) {

  const {workExperience} = props;
  const workExperienceCopy = workExperience.slice()

  workExperienceCopy.sort((a, b) => (new Date(b.endDate)) - (new Date(a.endDate)))

  const itemHeading = (item) => {
    if (item.jobTitle && item.employer && item.city && item.country) {
      return `${item.jobTitle} at ${item.employer}, ${item.city}, ${item.country}`
    } else if (item.jobTitle && item.employer && item.city) {
      return `${item.jobTitle} at ${item.employer}, ${item.city}`
    } else if (item.jobTitle && item.employer) {
      return `${item.jobTitle} at ${item.employer}`
    } else if (item.jobTitle) {
      return `${item.jobTitle}`
    }
  }  
  
  const dateRange = (item) => {
    const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    if (item.startDate && item.endDate) {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate)

    return (`${month[startDate.getMonth()]} ${startDate.getFullYear()} - ${month[endDate.getMonth()]} ${endDate.getFullYear()}`)
    }
  }  

  const description = (item) => {
    const text = item.description
    const lines = text.split('\n')
    console.log(lines)

    const description = lines.map((line, index) => <li 
    key={index} 
    className='cv__category-item-description-line'>
    { line!=='' ? `• ${line}` : null}
    </li>)

    return description;
  }


  const workExperienceList = workExperienceCopy.map( item => {
    return (
      <div key={item.id} className='cv__category-item'>
        <div className='cv__category-item-heading'>{itemHeading(item)}</div>
        <div className='cv__category-item-date-range'>{dateRange(item)}</div>
        <div className='cv__category-item-description'>{description(item)}</div>
      </div>
    )
  })

  return (
    <div className="cv__category">
      <div className='cv__category-heading'>
      <h2 className='cv__category-heading-text'>WORK EXPERIENCE</h2>
      </div>
      {workExperienceList}
    </div>
  )
}

export default CvWorkExperience
